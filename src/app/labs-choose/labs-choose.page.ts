import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateOrderGQL, LabsGQL, LabsQuery } from 'src/generated/graphql';
import { DatepickerComponent } from './datepicker/datepicker.component';

@Component({
  selector: 'app-labs-choose',
  templateUrl: './labs-choose.page.html',
  styleUrls: ['./labs-choose.page.scss'],
})
export class LabsChoosePage implements OnInit {

  s_id: any;
  labs: Observable<LabsQuery['allLab']['edges']>;
  pickedDate:string;

  constructor(private loadingController:LoadingController,private modalController:ModalController,private labsgql: LabsGQL, private route: ActivatedRoute, private router: Router, private ordergql: CreateOrderGQL) {
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


  async select(e) {
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
          status:1
        }
      };
      this.router.navigate(['/success'],navigationExtras)

    });

    });

    return await modal.present();

  }

}
