import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { InvoiceGQL, ServicesGQL } from 'src/generated/graphql';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {


  s_id:any;
  constructor(private serviceGQL:ServicesGQL,private invoice_gql:InvoiceGQL,private loadingController:LoadingController,private modalController: ModalController , private router:Router,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.s_id = this.router.getCurrentNavigation().extras.state.s_id;
        // console.log("here",this.s_id);
      }
    });

  }
  central:string;
  upperJaw: any[]
  lowerJaw: any[]
  services: any[]
  chosenValue: string;
  invoice: {[id:string]:{chosenService:string,cl:number}}

  ngOnInit() {
    this.invoice={};
    this.lowerJaw = [];
    this.upperJaw = [];
    this.services =[];
    this.serviceGQL.watch().valueChanges.subscribe(res=>{
      for (var i in res.data.allToothsevice.edges){
        // this.services.push(res.data.allToothsevice.edges[i].node.name)
        // console.log(res.data.allToothsevice.edges[i].node.name)
        var a = res.data.allToothsevice.edges[i].node.name;
        this.services.push(a)
        console.log(this.services)
      }
    })
    this.fillJaws(this.upperJaw, this.lowerJaw);
    this.chosenValue="";
  }


  async submit(){
      const loading = await this.loadingController.create({
        duration: 2000,
        spinner: 'bubbles'
      });
      await loading.present();
      var a = JSON.stringify(this.invoice)
      var b = String(a)
    // console.log(b);
    this.invoice_gql.mutate({
      s_id:this.s_id,
      teeth:b,
      central:this.central
    }).subscribe(res=>{
      console.log(res.data.toothMutationJson.status)
    })
    let navigationExtras: NavigationExtras = {
      state: {
        status: 1
      }
    };
    this.router.navigate(['/success'],navigationExtras);
  }



  setCentral(ev:any){
    this.central = ev.detail.value;
    console.log(this.central)
  }


  async choseTeeth(tooth:string) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { services: this.services, chosenTooth:tooth, invoice:this.invoice },
    });

    modal.onDidDismiss()
      .then((data) => {
        if(data['data'])
        {
          let modalData = data['data'];
          if(modalData.teeth)
          {
            this.invoice[modalData.teeth]={"chosenService":modalData.chosenService, "cl":modalData.cl};
          }
          else{
            delete this.invoice[modalData];
          }
          // console.log(this.invoice);
        }
        this.chosenValue="";
    });

    return await modal.present();
  }
  fillJaws(upperJaw, lowerJaw): void {
    for (let i = 1; i < 5; i = i + 1) {
      if (i == 1 || i == 3) {
        for (let j = 8; j > 0; j = j - 1) {
          if (i > 2) {
            lowerJaw.push(Number(i.toString() + j.toString()));
          }
          else {
            upperJaw.push(Number(i.toString() + j.toString()));
          }
        }
      }
      else {
        for (let j = 1; j < 9; j = j + 1) {
          if (i > 2) {
            lowerJaw.push(Number(i.toString() + j.toString()));
          }
          else {
            upperJaw.push(Number(i.toString() + j.toString()));
          }
        }
      }
    }
  }
}
