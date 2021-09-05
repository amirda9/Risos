import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() services:string[];
  @Input() chosenTooth:string;
  @Input() invoice:{[id:string]:{chosenService:string,cl:number}}
  chosenService:string;
  cl:number;
  constructor(private modalController: ModalController) {
   }
  ngOnInit() {
    this.chosenService="";
    this.cl=0;
   }
  save() {
    let data = {"chosenService":this.chosenService, "cl":this.cl, "teeth":this.chosenTooth};
    this.modalController.dismiss(data);
  }
  dismiss()
  {
    this.modalController.dismiss();
  }
  clean()
  {
    this.modalController.dismiss(this.chosenTooth)
  }
  selectService(ev:any)
  {
    this.chosenService=ev.detail.value;
    console.log(this.chosenService);
  }
  setCl(ev:any)
  {
    this.cl=Number(ev.detail.value);
    console.log(this.cl);
  }
}
