import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ForgetPassGQL} from '../../generated/graphql';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {


  id:string;
  Pntrans:string;
  constructor(private readonly translateservice:TranslateService,private forgetpass_gql:ForgetPassGQL , private alertcontroller:AlertController , private router:Router) { }

  ngOnInit() {
    this.Pntrans = this.translateservice.instant('Phone Number')
  }

  forgetPass(){
    this.forgetpass_gql.mutate({
      phoneNumber:this.id
    }).subscribe(
      async res=>{
        if(res.data.forgetPass.status=="Success"){
          // console.log(this.id)
          let navigationExtras: NavigationExtras = {
            state: {
              s_id: this.id,
              trans_state : 1
            }
          };
          this.router.navigate(['/verify'],navigationExtras);
        }
        else{
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'You have to sign up first!',
            buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
          });
          await alert.present();
        }
      }
    )
  }

}
