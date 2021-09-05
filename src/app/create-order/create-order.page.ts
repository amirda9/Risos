import { Component, OnInit } from '@angular/core';
import { dentalShades, teethImg,teethImgfa } from '../smile/dentalShades/dentalShades';
import { ModalComponent } from '../invoice/modal/modal.component';
import { InvoiceGQL, Save_DesignGQL, ServicesGQL } from 'src/generated/graphql';
import { LoadingController, ModalController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ID } from '../constants';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {


  teethModel: string[]
  teethColors: string[]
  chosenModel: string;
  chosenTeeth:string;
  chosenColor:string;
  teethsPerModel:string[];
  central:string;
  upperJaw: any[]
  lowerJaw: any[]
  services: any[]
  chosenValue: string;
  invoice: {[id:string]:{chosenService:string,cl:number}}
  sid:any;
  id:any;



  constructor(private invoice_gql:InvoiceGQL,private router:Router,private route:ActivatedRoute,private save_DesignGQL:Save_DesignGQL,private serviceGQL:ServicesGQL,private modalController:ModalController,private loadingController:LoadingController) { }

  ngOnInit() {

    this.teethModel = Object.keys(teethImg);
    this.teethColors = Object.keys(dentalShades);
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
    // console.log(this.teethColors)




        this.sid = this.router.getCurrentNavigation().extras.state.s_id;

      console.log("url is : "+this.route.snapshot.paramMap.get("id"))
      this.id=this.route.snapshot.paramMap.get("id");

      // console.log(this.sid,this.id)

  }

  choseTeethModel(event){
    this.chosenModel = event.target.value;
    // console.log(event.target.value)
  }

  choseColor(event){
    this.chosenColor = event.target.value;
  }

  choseTeethPerModel(event){

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



  async submit(){
    // console.log(this.chosenColor,this.chosenModel,this.invoice)
      const loading = await this.loadingController.create({
        message: 'Loading ...',
        duration:2000,
        spinner: 'bubbles'
      });
      await loading.present();

      this.save_DesignGQL.mutate({
        p_id:+this.id,
        dr:+localStorage.getItem(ID),
        model:this.chosenModel,
        color:this.chosenColor
      }).subscribe(res=>{
        console.log(res.data.updateSmileDesign.status)
        loading.dismiss();
        var a = JSON.stringify(this.invoice)
      var b = String(a)
        this.invoice_gql.mutate({
          teeth:b,
          central:this.central,
          s_id:this.sid
        }).subscribe(res=>{
          console.log(res.data.toothMutationJson.status)
          let navigationExtras: NavigationExtras = {
            state: {
              s_id: this.sid
            }
          };
          // console.log(this.s_id);
          this.router.navigate(['/labs-choose'], navigationExtras);
        })
      })

  }

}
