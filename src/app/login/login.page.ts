import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CreateDeviceGQL, LoginGQL,LoginMutation, VerifyGQL } from 'src/generated/graphql';
// import { AuthService } from '../auth.service';
import {Observable} from 'rxjs';
import { AUTHTOKEN, DID, ID } from '../constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_bool:boolean=false;
  login: LoginMutation['tokenAuth'];
  id :string ;
  pass :string;
  token:any;
  username:any;

  keyTranslated = '';
  passTranslated :string;


  constructor(private verifygql:VerifyGQL,private cdevice:CreateDeviceGQL,private readonly translateService: TranslateService,private alertcontroller:AlertController,private router:Router,private loginGQL:LoginGQL,public loadingcontroller:LoadingController) { }

  async ngOnInit() {
    this.keyTranslated = this.translateService.instant('Phone Number');
    this.passTranslated = this.translateService.instant('Password');

  }

  forget(){
    this.router.navigate(['/forget-pass'])
  }

  fixNumbers = function (str)
{
   var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  var arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  if(typeof str === 'string')
  {
    for(var i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

check(evt){
  this.id = this.fixNumbers(this.id);
  }

  async confirm(){
    let my_id = this.id.trim();
    const loading = await this.loadingcontroller.create({
      message:  'Loading ...'
      });
      loading.present();
      this.loginGQL.mutate({
        username:my_id,
        password:this.pass

      }).subscribe(next=>
        {
          if(localStorage.getItem(DID)){

          }
          // console.log(next);
          if(next.data.tokenAuth.token !=null){
            this.login_bool = true;
            this.token = next.data.tokenAuth.token;
            localStorage.setItem(ID,next.data.tokenAuth.profile)
            localStorage.setItem(AUTHTOKEN,this.token)
            if(localStorage.getItem(DID)){
              this.cdevice.mutate({
                ProfileId:next.data.tokenAuth.profile,
                deviceId:localStorage.getItem(DID)
              }).subscribe(res=>{
                console.log(res.data.createDevice.status)
              })
            }
            loading.dismiss()
            this.router.navigate(['/tabs/main']);
            // console.log(this.username)
          }
        },
        async errors=>{
          console.log(errors)
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Invalid Creditentials',
            buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
          });
          loading.dismiss()
          await alert.present();

        }
      );
    }
}
