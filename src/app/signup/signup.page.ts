import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RegisterGQL, RegisterMutation, Req_OtpGQL } from 'src/generated/graphql';
import { USERNAME } from '../constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private transservice:TranslateService,private router:Router,private alertcontroller:AlertController,private registerGQL:RegisterGQL ,private loadingcontroller:LoadingController,private req_otp:Req_OtpGQL) { }

  phone_no :string;
  pass :string ;
  email:string;
  pass_rep :string;
  is_TextFieldType:boolean=false;

  passTranslated:string;
  repassTranslated:string;
  PnTrans:string;
  EmailTrans:string;

  ngOnInit() {
    this.passTranslated=this.transservice.instant('Password')
    this.repassTranslated = this.transservice.instant('Retype Password')
    this.PnTrans = this.transservice.instant('Phone Number')
    this.EmailTrans = this.transservice.instant('E-mail address')
  }

  register: RegisterMutation;

  togglePasswordFieldType(){
    this.is_TextFieldType = !this.is_TextFieldType;
  }

  async confirm(){
      if(this.pass == this.pass_rep){
      const loading = await this.loadingcontroller.create({
        message: 'Loading ...',
        duration:2000
        });
        loading.present();
        this.registerGQL.mutate({
          username:this.phone_no,
          password:this.pass,
          email:this.email
        }).subscribe(next=>
          {
            // if(next.data !=null){
              localStorage.setItem(USERNAME,this.phone_no)
              this.req_otp.mutate({
                username:this.phone_no
              })
              loading.dismiss()
              let navigationExtras: NavigationExtras = {
                state: {
                  s_id: this.phone_no,
                  trans_state:2
                }
              };
              this.router.navigate(['/verify'],navigationExtras)
            // }
            // else{
            //   console.log("error")
            // }
          },
          async errors=>{
          loading.dismiss();
          // console.log(errors)
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'You have already signed up !',
            buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
          });
          await alert.present();
        }
        );
        }
        else{
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Passwords are not the same',
            buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
          });
          await alert.present();
        }

  }

  hasAccount(){
    this.router.navigate(['/login'])
  }

  login(){
    this.router.navigate(['/login']);
  }
}
