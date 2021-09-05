import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CroppedEvent } from 'ngx-photo-editor';
import {DeletePatientPic, DelpatientpicGQL, PatientGQL, Update_PicGQL} from '../../generated/graphql';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {


  id:any;
  sideimg:any;
  smileimg:any;
  fullimg:any;
  optimg:any;

  img1: any;
  img2: any;
  img3: any;
  img4: any;

  base64: any;
  base64_2: any;
  base64_3: any;
  base64_4: any;


  imageChangedEvent: any;
  imageChangedEvent2: any;
  imageChangedEvent3: any;
  imageChangedEvent4: any;

  constructor(private update_pic:Update_PicGQL,private delpic:DelpatientpicGQL,private alertcontroller:AlertController ,private route: ActivatedRoute, private router: Router , private patientgql:PatientGQL) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        // console.log(this.id);
        this.patientgql.watch({
          id:"Patient:"+this.id
        }).valueChanges.subscribe(res=>{
          if(res.data.Patient.patientPic.fullSmileImage){
            this.fullimg = res.data.Patient.patientPic.fullSmileImage;
          }
          else{
            this.fullimg = "profile/default-profile.jpg";
          }
          if(res.data.Patient.patientPic.smileImage){
            this.smileimg = res.data.Patient.patientPic.smileImage;
          }
          else{
            this.smileimg = "profile/default-profile.jpg";
          }
          if(res.data.Patient.patientPic.sideImage){
            this.sideimg = res.data.Patient.patientPic.sideImage;
          }
          else{
            this.sideimg = "profile/default-profile.jpg";
          }
          if(res.data.Patient.patientPic.optionalImage){
            this.optimg = res.data.Patient.patientPic.sideImage;
          }
          else{
            this.optimg = "profile/default-profile.jpg";
          }
          // console.log(this.smileimg)
        })
      }
    });
  }

  ngOnInit() {
  }

  async heavy() {
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'File is too heavy',
      buttons: [{
        text: 'Try Again!', cssClass: 'my-custom-class', handler: (blah) => {

        }
      }]
    });

    await alert.present();
  }


  async confirm(e) {
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Are you sure ?',
      buttons: [{
        text: 'Yes', cssClass: 'my-custom-class', handler: (blah) => {
          this.delete(e);
        }
      },
      {
        text: 'No', cssClass: 'my-custom-class', handler: (blah) => {

        }
      }]
    });

    await alert.present();
  }


  // frontUP(){
  //   console.log("front triggered")
  // }

  fileChangeEvent(event: any):void{
    this.imageChangedEvent = event;
    console.log("here")
    // this.imageCropped(event)
  }

  imageCropped(event: CroppedEvent) {
    console.log(event.file.size)
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img1 = event.file;
      // this.base64 = event.base64;
      // this.fullimg = event.base64;
      var my:number=+this.id;
      this.update_pic.mutate(
        {
          id:my,
          pics:{
            fullSmileImage:this.img1
          }
        }
        ).subscribe(res=>{
          console.log(res.data.updatePatientPic.status);
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{
            if(res.data.Patient.patientPic.fullSmileImage){
              this.fullimg = res.data.Patient.patientPic.fullSmileImage;
            }
            else{
              this.fullimg = "profile/default-profile.jpg";
            }
            // console.log(this.smileimg)
          })
        })
    }

  }

  delete(e){
    console.log("delete",this.id)
    var my:number=+this.id;
    // console.log(e)
      if(e==1){
        this.delpic.mutate({
          id:my,
          selectedFields:{
            fullSmileImage:true
          }
        }).subscribe(res=>{
          console.log("fullsmile img",res.data.deletePatientPic.status)
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{
            if(res.data.Patient.patientPic.fullSmileImage){
              this.fullimg = res.data.Patient.patientPic.fullSmileImage;
            }
            else{
              this.fullimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.smileImage){
              this.smileimg = res.data.Patient.patientPic.smileImage;
            }
            else{
              this.smileimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.sideImage){
              this.sideimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.sideimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.optionalImage){
              this.optimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.optimg = "profile/default-profile.jpg";
            }
            // console.log(this.smileimg)
          })
        })
      }
      if(e==2){
        this.delpic.mutate({
          id:my,
          selectedFields:{
            smileImage:true
          }
        }).subscribe(res=>{
          console.log("smile img",res.data.deletePatientPic.status)
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{
            if(res.data.Patient.patientPic.fullSmileImage){
              this.fullimg = res.data.Patient.patientPic.fullSmileImage;
            }
            else{
              this.fullimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.smileImage){
              this.smileimg = res.data.Patient.patientPic.smileImage;
            }
            else{
              this.smileimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.sideImage){
              this.sideimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.sideimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.optionalImage){
              this.optimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.optimg = "profile/default-profile.jpg";
            }
            // console.log(this.smileimg)
          })
        })
      }

      if(e==3){
        this.delpic.mutate({
          id:my,
          selectedFields:{
            sideImage:true
          }
        }).subscribe(res=>{
          console.log("side img",res.data.deletePatientPic.status)
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{
            if(res.data.Patient.patientPic.fullSmileImage){
              this.fullimg = res.data.Patient.patientPic.fullSmileImage;
            }
            else{
              this.fullimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.smileImage){
              this.smileimg = res.data.Patient.patientPic.smileImage;
            }
            else{
              this.smileimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.sideImage){
              this.sideimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.sideimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.optionalImage){
              this.optimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.optimg = "profile/default-profile.jpg";
            }
            // console.log(this.smileimg)
          })
        })
      }
      if(e==4){
        this.delpic.mutate({
          id:my,
          selectedFields:{
            optionalImage:true
          }
        }).subscribe(res=>{
          console.log("opt img",res.data.deletePatientPic.status)
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{
            if(res.data.Patient.patientPic.fullSmileImage){
              this.fullimg = res.data.Patient.patientPic.fullSmileImage;
            }
            else{
              this.fullimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.smileImage){
              this.smileimg = res.data.Patient.patientPic.smileImage;
            }
            else{
              this.smileimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.sideImage){
              this.sideimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.sideimg = "profile/default-profile.jpg";
            }
            if(res.data.Patient.patientPic.optionalImage){
              this.optimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.optimg = "profile/default-profile.jpg";
            }
            // console.log(this.smileimg)
          })
        })

    }




  }

  fileChangeEvent2(event: any) {
    // console.log('hi');
    this.imageChangedEvent2 = event;
  }

  imageCropped2(event: CroppedEvent) {
    console.log(event.file.size)
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img2 = event.file;
      // this.base64 = event.base64;
      // this.fullimg = event.base64;
      var my:number=+this.id;
      this.update_pic.mutate(
        {
          id:my,
          pics:{
            smileImage:this.img2
          }
        }
        ).subscribe(res=>{
          console.log(res.data.updatePatientPic.status);
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{

            if(res.data.Patient.patientPic.smileImage){
              this.smileimg = res.data.Patient.patientPic.smileImage;
            }
            else{
              this.smileimg = "profile/default-profile.jpg";
            }

            // console.log(this.smileimg)
          })
        })
    }
  }

  fileChangeEvent3(event: any) {
    // console.log('hi');
    this.imageChangedEvent3 = event;
  }

  imageCropped3(event: CroppedEvent) {
    console.log(event.file.size)
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img3 = event.file;
      // this.base64 = event.base64;
      // this.fullimg = event.base64;
      var my:number=+this.id;
      this.update_pic.mutate(
        {
          id:my,
          pics:{
            sideImage:this.img3
          }
        }
        ).subscribe(res=>{
          console.log(res.data.updatePatientPic.status);
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{

            if(res.data.Patient.patientPic.smileImage){
              this.sideimg = res.data.Patient.patientPic.sideImage;
            }
            else{
              this.sideimg = "profile/default-profile.jpg";
            }

            // console.log(this.smileimg)
          })
        })
    }
  }

  fileChangeEvent4(event: any) {
    // console.log('hi');
    this.imageChangedEvent4 = event;
  }

  imageCropped4(event: CroppedEvent) {
    console.log(event.file.size)
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img4 = event.file;
      // this.base64 = event.base64;
      // this.fullimg = event.base64;
      var my:number=+this.id;
      this.update_pic.mutate(
        {
          id:my,
          pics:{
            optionalImage:this.img4
          }
        }
        ).subscribe(res=>{
          console.log(res.data.updatePatientPic.status);
          this.patientgql.watch({
            id:"Patient:"+this.id
          }).valueChanges.subscribe(res=>{

            if(res.data.Patient.patientPic.smileImage){
              this.optimg = res.data.Patient.patientPic.optionalImage;
            }
            else{
              this.optimg = "profile/default-profile.jpg";
            }

            // console.log(this.smileimg)
          })
        })
    }
  }
}
