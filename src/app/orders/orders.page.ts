import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrdersGQL,OrdersQuery, Orders_SGQL, Orders_SQuery, Orders_StateGQL} from 'src/generated/graphql'
import { ID, LANG } from '../constants';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  text:string;
  orders:Observable< OrdersQuery['allOrder']['edges']>;
  search_res:any;
  searched:boolean;
  constructor(private trService:TranslateService,private router:Router , private ordergql:OrdersGQL , private search_o:Orders_SGQL ,private state_o:Orders_StateGQL) {
    this.orders = this.ordergql.watch({dr:localStorage.getItem(ID)}).valueChanges.pipe(map(res=>res.data.allOrder.edges))
  }

  ngOnInit() {
    // console.log(localStorage.getItem(LANG))
    
  }

  show(e){
    console.log("order is :" + e)
    let navigationExtras: NavigationExtras = {
      state: {
        id: e
      }
    };
    this.router.navigate(['/order-detail'], navigationExtras);
  }

  doRefresh(e){
    this.orders = this.ordergql.watch({dr:localStorage.getItem(ID)}).valueChanges.pipe(map(result => result.data.allOrder.edges));
    setTimeout(() => {
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }

  search(){
    this.orders = this.search_o.watch({
      name:this.text,
    }).valueChanges.pipe(map(res=>res.data.allOrder.edges))
  }

  state(ev:any){
    console.log(ev.detail.value)
    this.orders = this.state_o.watch({
      name:ev.detail.value,
    }).valueChanges.pipe(map(res=>res.data.allOrder.edges))
  }

}
