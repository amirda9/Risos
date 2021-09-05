import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { LabGQL, Orders_LGQL } from 'src/generated/graphql';
import { DID, ID } from '../constants';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-lab-orders',
  templateUrl: './lab-orders.page.html',
  styleUrls: ['./lab-orders.page.scss'],
})
export class LabOrdersPage implements OnInit {

  id:string;
  profile:string;
  orders:any;
  constructor(private modalController:ModalController,private orders_l:Orders_LGQL , private route:ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        this.profile = this.router.getCurrentNavigation().extras.state.profile;
      }
    });
   }

  ngOnInit() {
    this.orders = this.orders_l.watch({
      dr:localStorage.getItem(ID),
      lab:this.id
    }).valueChanges.pipe(map(result => result.data.allOrder.edges));

    console.log("profile id is "+this.profile)
  }


  async show(e){
    // console.log("hit")
    const modal = await this.modalController.create({
      component: TicketComponent,
      componentProps: { id:e,profile:this.profile },
    });

    return await modal.present();
  }
}
