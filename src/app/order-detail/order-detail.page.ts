import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrderGQL, OrderQuery} from '../../generated/graphql';

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

  constructor(private route: ActivatedRoute, private router: Router, private ordergql:OrderGQL) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        // console.log(this.id);
        this.ordergql.watch({
          id:"Order:"+this.id
        }).valueChanges.subscribe(res=>{
          this.Name = res.data.Order.relatedService.relatedPatient.relatedProfile.firstName;
          this.Delivery = res.data.Order.expectedDate.slice(0,10);
          this.Lab = res.data.Order.finalizedLab.relatedProfile.firstName;
          this.Type = res.data.Order.status;
          // console.log("p_detail - _id");
          console.log(this.Name)
        })
      }
    });
   }

  ngOnInit() {
    // this.Delivery = this.Delivery.slice(0,10);
  }


  contact(){
    this.router.navigate(['/contact-lab']);
  }

}
