import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CreatelabGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-createlab',
  templateUrl: './createlab.page.html',
  styleUrls: ['./createlab.page.scss'],
})
export class CreatelabPage implements OnInit {

  name:string;
  mobile_no:any;
  land_no:any;
  address:any;
  desc:any;
  constructor(private createlabgql:CreatelabGQL ,private router:Router,private alertcontroller:AlertController, private loadingcontroller:LoadingController) { }

  ngOnInit() {
  }

  async save(){
    const loading = await this.loadingcontroller.create({
      message:  'Loading ...'
      });
      loading.present();
      this.createlabgql.mutate({
        Username:this.name,
        mobile:this.mobile_no,
        land:this.land_no,
        adress:this.address,
        description:this.desc
      }).subscribe(next=>
        {
          console.log(next);
          if(next.data.createLab.token !=null){
            loading.dismiss()
            this.router.navigate(['/tabs/labs']);
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
