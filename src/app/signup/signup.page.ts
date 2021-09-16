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

  check(evt){
    this.phone_no = this.fixNumbers(this.phone_no);
    // var charCode = (evt.which) ? evt.which : evt.keyCode
    // console.log(charCode)
    // if ((charCode < 48 || charCode > 57 && charCode!=8) ){
    //     // alert('test')
    //     console.log(this.phone_no)
    // }
    // return true;

    // var ew = evt.which;
    // if(ew == 32 || ew == 8){}
    // else if(48 <= ew && ew <= 57){}
    // else if(65 <= ew && ew <= 90){}
    // else if(97 <= ew && ew <= 122){}
    // else{
    //   // alert('hi')
    // }

    // $persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    // $arabic = ['٩', '٨', '٧', '٦', '٥', '٤', '٣', '٢', '١','٠'];

    // $num = range(0, 9);
    // $convertedPersianNums = str_replace($persian, $num, $string);
    // $englishNumbersOnly = str_replace($arabic, $num, $convertedPersianNums);
    // return false;
//     var
// persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
// EnglishNumbers  = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];


//   if(typeof this.phone_no === 'string')
//   {
//     for(var i=0; i<10; i++)
//     {
//       this.phone_no = this.phone_no.replace(persianNumbers[i],i);
//     }
//   }

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
