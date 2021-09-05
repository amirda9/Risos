import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChangePassGQL} from '../../generated/graphql';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  is_TextFieldType:boolean=false;
  pass:string;
  pass_rep:string;
  user:string;
  constructor(private changepass_gql:ChangePassGQL , private route:ActivatedRoute , private router:Router , private alertcontroller:AlertController) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.id;
      }
    });

  }

  togglePasswordFieldType(){
    this.is_TextFieldType = !this.is_TextFieldType;
  }

  async save(){
    if(this.pass != this.pass_rep){
      const alert = await this.alertcontroller.create({
        cssClass: 'my-custom-class',
        // header: 'Alert',
        // subHeader: 'Subtitle',
        message: 'Your passwords are not the same',
        buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
      });
      await alert.present();
    }
    else{
      console.log('here')
      this.changepass_gql.mutate({
        new:this.pass,
        user:this.user
      }).subscribe(async res=>{
        console.log(res)
        if(res.data.changePassword.status=="success"){
          // console.log(this.id)
          let navigationExtras: NavigationExtras = {
            state: {
              status: 2
            }
          };
          this.router.navigate(['/success'],navigationExtras);
        }
      })
    }
  }

}
