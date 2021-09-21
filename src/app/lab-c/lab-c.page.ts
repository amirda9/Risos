import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabsGQL, LabsQuery, CreateOrderGQL } from 'src/generated/graphql';
import { DatepickerComponent } from '../labs-choose/datepicker/datepicker.component';

@Component({
  selector: 'app-lab-c',
  templateUrl: './lab-c.page.html',
  styleUrls: ['./lab-c.page.scss'],
})
export class LabCPage implements OnInit {

  s_id: any;
  labs: Observable<LabsQuery['allLab']['edges']>;
  pickedDate:string;

  constructor(private labsgql: LabsGQL, private route: ActivatedRoute, private router: Router, private ordergql: CreateOrderGQL,
    private modalController:ModalController, private loadingController: LoadingController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.s_id = this.router.getCurrentNavigation().extras.state.s_id;
        // console.log("here",this.s_id);
      }
    });
  }

  ngOnInit() {
    this.labs = this.labsgql.watch().valueChanges.pipe(map(result => result.data.allLab.edges));
  }


  select(e) {
    // console.log("select");
    // console.log(typeof(this.s_id));
    // console.log(e);
    // var y: number = +this.s_id;
    this.ordergql.mutate({
      sid: this.s_id,
      lid: e
    }).subscribe(res => {
this.second(e);
    });


  }


  async second(e) {
    const modal = await this.modalController.create({
      component: DatepickerComponent,
    });




    modal.onDidDismiss()
      .then(async (data) => {
        const loading = await this.loadingController.create({
          message: 'Loading ...',
          spinner: 'bubbles',
          duration:2000
        });
        await loading.present();
        this.pickedDate = data['data']
      //  console.log(this.pickedDate)

       this.ordergql.mutate({
      sid: this.s_id,
      lid: e,
      date:this.pickedDate
    }).subscribe(async res => {
      loading.dismiss()
      console.log(res.data.createOrder.order);
      let navigationExtras: NavigationExtras = {
        state: {
          s_id: this.s_id
        }
      };
      this.router.navigate(['/invoice'],navigationExtras)
    });

    });

    return await modal.present();

  }

}
