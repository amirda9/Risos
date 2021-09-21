import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ID } from 'src/app/constants';
import { OrderGQL, OrderQuery, TicketGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {

  @Input() id:any;
  @Input() profile:number;
  ID:number = +localStorage.getItem(ID);
  tickets:Observable< OrderQuery['Order']['ticketSet']['edges']>;
  message:string;
  constructor(private loadingController:LoadingController,private ticketgql:TicketGQL,private ordergql:OrderGQL,private modalcontroller:ModalController) { }

  ngOnInit() {
    // console.log("order id is "+this.id)
    this.tickets=this.ordergql.watch({
      id:"Order:"+this.id
    }).valueChanges.pipe(map(result => result.data.Order.ticketSet.edges));


    setInterval(()=>{       
      // console.log(1)                    
      this.tickets=this.ordergql.watch({
        id:"Order:"+this.id
      }).valueChanges.pipe(map(result => result.data.Order.ticketSet.edges));
  }, 100000);

  }


  
  close(){
    this.modalcontroller.dismiss();
  }


  send(){

    this.ticketgql.mutate({
      text:this.message,
      order:+this.id,
      receive:this.profile,
      send:+localStorage.getItem(ID)
    }).subscribe(async res=>{
      // console.log(res)
      const loading = await this.loadingController.create({
        // message: 'Hellooo',
        duration: 2000,
        spinner: 'bubbles'
      });
      this.message ='';
      await loading.present();
      this.tickets=this.ordergql.watch({
        id:"Order:"+this.id
      }).valueChanges.pipe(map(result => result.data.Order.ticketSet.edges));

    })
  }
}
