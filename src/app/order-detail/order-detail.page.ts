import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {OrderGQL, OrderQuery,UpdateOrderGQL} from '../../generated/graphql';
import { ID, LANG } from '../constants';
import { TicketComponent } from '../lab-orders/ticket/ticket.component';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  Name:string;
  Lab:string;
  Delivery:string="99/12/12";
  id:string;
  Type:string;
  Desc:string;
  profile:number;
  Invoice: {
    price: number,
    description: string,
    actualDate: string,
  }
  constructor(private route: ActivatedRoute, private router: Router, private ordergql:OrderGQL, private updateOrderGQL:UpdateOrderGQL, private modalController:ModalController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        // console.log(this.id);
        this.ordergql.watch({
          id:"Order:"+this.id
        }).valueChanges.subscribe(res=>{
          this.Name = res.data.Order.relatedService.relatedPatient.relatedProfile.firstName;
          this.Delivery = res.data.Order.expectedDate.slice(0,10);
          if(localStorage.getItem(LANG)=="en"){
            // console.log("its english")s
            
          }
          else{
            this.Delivery = moment(this.Delivery, 'YYYY-MM-DD').locale('fa').format('YYYY-MM-DD');
            // console.log("its persian")
          }
          this.Lab = res.data.Order.finalizedLab.relatedProfile.firstName;
          this.profile = res.data.Order.finalizedLab.relatedProfile._id;
          this.Type = res.data.Order.status;
          // console.log("p_detail - _id");
          if(res.data.Order.status==="PROCESSING_INVOICE_READY"){
            console.log(res.data.Order.invoice.price);
            this.Invoice = {price:res.data.Order.invoice.price, description:res.data.Order.invoice.description, actualDate:res.data.Order.invoice.actualDate.slice(0,10)};
            console.log(this.Invoice);
          }
          console.log(this.Name)
        })
      }
    });
   }

  ngOnInit() {
    // this.Delivery = this.Delivery.slice(0,10);
    
  }

  updateOrderStatus (type:string){
    this.updateOrderGQL.mutate({
      id:this.id,
      status:type
    }).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/orders']);
  }
  contact(){
    this.router.navigate(['/contact-lab']);
  }


  async show(){
    // console.log("hit")
    const modal = await this.modalController.create({
      component: TicketComponent,
      componentProps: { id:this.id,profile:this.profile },
    });

    return await modal.present();
  }

}
