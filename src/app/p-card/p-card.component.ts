import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DelPatientGQL } from 'src/generated/graphql';
import { P_ID } from '../constants';

@Component({
  selector: 'app-p-card',
  templateUrl: './p-card.component.html',
  styleUrls: ['./p-card.component.scss'],
})
export class PCardComponent implements OnInit {

  constructor(private delPatient:DelPatientGQL,private router:Router , private alertcontroller:AlertController) { }
  @Input() firstname:string;
  @Input() lastname:string;
  @Input() img:string;
  @Input() id:any;

  ngOnInit() {
    // console.log(this.img,"img")
    // console.log("patient id "+this.id)
  }

  show(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: this.id
      }
    };
    this.router.navigate(['/tabs/p-detail'], navigationExtras);
    localStorage.setItem(P_ID,this.id)
  }

  async remove(){
    // console.log(this.id)
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Are you sure you want to remove this patient ?',
      buttons: [{text:'Yes',cssClass:'my-custom-class',handler: (blah) => {
        // this.router.navigate(['/tabs/patients'])
        // console.log("yes")
        var my_id:number=+this.id;
        this.delPatient.mutate({
          id:my_id
        }).subscribe(res=>{
          console.log(res.data.deletePatient.status)
          location.reload();
        })

      }},
      {text:'No',cssClass:'my-custom-class',handler: (blah) => {
        // this.router.navigate(['/tabs/patients'])
        // console.log("no")
      }}]
    });
    await alert.present();
  }

}
