import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CroppedEvent } from 'ngx-photo-editor';
import { AllsmileGQL, PatientGQL, ProfilePicGQL, ServiceGQL } from '../../generated/graphql';
import { ID, P_ID } from '../constants';
import { DataService } from '../services/data.service';


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-p-detail',
  templateUrl: './p-detail.page.html',
  styleUrls: ['./p-detail.page.scss'],
})
export class PDetailPage implements OnInit {

  id: string;
  _id: any;
  name: string;
  base64: any;
  pro_file: any;
  pro_status: boolean = false;
  imageChangedEvent: any;
  pro_id: any;
  img: File;
  mobile: string;
  last: string;
  address: string;
  age:number;
  detail:string;

  edit:boolean=true;

  constructor(private servicegql:ServiceGQL,private dataService:DataService,private alertcontroller:AlertController, private smile_design: AllsmileGQL, private route: ActivatedRoute, private router: Router, private loadingcontroller: LoadingController, private patientgql: PatientGQL, private pro_picgql: ProfilePicGQL) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        var id_s = "Patient:" + this.id;
        console.log(this.id);
        this.patientgql.watch({
          id: id_s
        }).valueChanges.subscribe(res => {
          this.name = res.data.Patient.relatedProfile.firstName;
          this._id = res.data.Patient._id;
          this.pro_id = res.data.Patient.relatedProfile._id;
          this.pro_file = res.data.Patient.relatedProfile.profilePic;
          this.mobile = res.data.Patient.relatedProfile.phoneNumber;
          this.age = res.data.Patient.relatedProfile.age;
          // console.log("p_detail - _id");
          // console.log(this._id)
        })
      }
    });
  }

  ngOnInit() {

    // console.log(this.name)

  }

  ngAfterViewInit() {
    document.getElementById("getFile").onchange = (e?: HTMLInputEvent) => {
      var files: any = e.target.files[0];
      //   console.log(files);
      this.img = files;
      // localStorage.setItem(Pic,files);
    }


  }

  gallery() {
    let navigationExtras: NavigationExtras = {
      state: {
        id: this.id
      }
    };
    this.router.navigate(['/gallery'], navigationExtras);
  }

  labs() {
    var navigationExtras;
    this.router.navigate(['/labs'], navigationExtras);
  }


  fileChangeEvent(event: Event) {
    this.pro_status = true;
    this.imageChangedEvent = event;
  }

  async imageCropped(event: CroppedEvent) {
    const loading = await this.loadingcontroller.create({
      message: 'Loading ...',duration:2000
    });
    loading.present();
    this.base64 = event.base64;
    let my_img = event.file;
    console.log(this._id)
    this.pro_picgql.mutate(
      {
        id: this.pro_id,
        profilePic: my_img
      }).subscribe(res => {
        console.log(res.data.updateProfile.status);
        loading.dismiss();
      })
    // console.log(this.base64)
  }


  order(){
    this.servicegql.mutate({
      p_id: this._id,
      d_id: localStorage.getItem(ID)
    }).subscribe(res => {
      // this.s_id=res.data.createService.service.id;
      // console.log(res.data.createService.service.id);
      let sid = res.data.createService.service.id;
      // console.log(this.s_id)
      let navigationExtras: NavigationExtras = {
        state: {
          s_id: sid,
        }
      };
      // console.log(this.s_id);
      // this.router.navigate(['/'], navigationExtras);
    this.router.navigateByUrl('/create-order/'+this._id,navigationExtras);
    })
  }


  async go() {
    const loading = await this.loadingcontroller.create({
      message: 'Loading ...'
    });
    loading.present();
    this.smile_design.watch({
      d_id: localStorage.getItem(ID),
      p_id: localStorage.getItem(P_ID)
    }
    ).valueChanges.subscribe(async res => {
      console.log(res.data.allSmiledesignservice.edges[0].node.status,res.data.allSmiledesignservice.edges[0].node)
      // console.log(res.data.allSmiledesignservice.edges[0].node.)
      if (res.data.allSmiledesignservice.edges[0].node.status == "READY") {
        loading.dismiss()
        // let navigationExtras: NavigationExtras = {
        //   state: {
        //     _id: this._id,
        //     ratio:res.data.allSmiledesignservice.edges[0].node.heigth/res.data.allSmiledesignservice.edges[0].node.width
        //   }
        // };
        // this.router.navigate(['/smile'], navigationExtras);

        this.dataService.setData(this._id);
        this.dataService.setRatio(res.data.allSmiledesignservice.edges[0].node.heigth/res.data.allSmiledesignservice.edges[0].node.width);
        this.router.navigateByUrl('/smile/'+this._id);
      }
      else if(res.data.allSmiledesignservice.edges[0].node.status == "IMPROPER_IMAGE"){
        const alert = await this.alertcontroller.create({
          cssClass: 'my-custom-class',
          // header: 'Alert',
          // subHeader: 'Subtitle',
          message: 'Your Picture is not good enough to process , Please delete this patient !',
          buttons: [{text:'Try Again!',cssClass:'my-custom-class',handler: (blah) => {
            this.router.navigate(['/tabs/patients'])
          }}]
        });
        loading.dismiss()
        await alert.present();
      }
      else {
        // console.log("amir")
        const alert = await this.alertcontroller.create({
          cssClass: 'my-custom-class',
          // header: 'Alert',
          // subHeader: 'Subtitle',
          message: 'Artificial Intelligence has not responded yet!',
          buttons: [{text:'Try Again!',cssClass:'my-custom-class',handler: (blah) => {
            this.router.navigate(['/tabs/patients'])
          }}]
        });
        loading.dismiss()
        await alert.present();
      }
    },

    error=>{
      console.log(error)
    }


    )
  }

}
