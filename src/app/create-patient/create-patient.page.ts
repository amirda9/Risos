import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CroppedEvent } from 'ngx-photo-editor';
import { CreatepatientGQL } from 'src/generated/graphql';
import { ID } from '../constants';
import { PhotoService } from '../services/photo.service';



interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.page.html',
  styleUrls: ['./create-patient.page.scss'],
})
export class CreatePatientPage implements OnInit {

  status: number;
  From_storage: boolean = false;
  name: string;
  age: number;
  phone_no: string;

  pro_pic: File;

  img1: any;
  img2: any;
  img3: any;
  img4: any;

  imageChangedEvent: any;
  imageChangedEvent2: any;
  imageChangedEvent3: any;
  imageChangedEvent4: any;


  base64: any;
  base64_2: any;
  base64_3: any;
  base64_4: any;

  ios: boolean;
  Pntranslated: string;

  constructor(public platform: Platform, private readonly translateService: TranslateService, public photoService: PhotoService, private createpatientgql: CreatepatientGQL, private router: Router, private alertcontroller: AlertController, private loadingcontroller: LoadingController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.status = 1;
        this.From_storage = true;
      }
      else {
        this.status = -1;
      }

    });
  }




  ngOnInit() {
    this.Pntranslated = this.translateService.instant('Phone Number');
    this.ios = this.platform.is("ios");
    console.log(this.ios)
  }


  import() {
    this.status += 1;
  }


  take() {
    this.router.navigate(['/capturex'])
  }

  ngAfterViewInit() {
    // document.getElementById("img1").onchange = (e?: HTMLInputEvent)=> {
    //   var file1: any = e.target.files[0];
    //   this.img1 = file1;
    // }

    // document.getElementById("img2").onchange = (e?: HTMLInputEvent)=> {
    //   var file2: any = e.target.files[0];
    //   this.img2 = file2;
    // }

    // document.getElementById("img3").onchange = (e?: HTMLInputEvent)=> {
    //   var file3: any = e.target.files[0];
    //   this.img3 = file3;
    // }

    // document.getElementById("img4").onchange = (e?: HTMLInputEvent)=> {
    //   var file4: any = e.target.files[0];
    //   this.img4 = file4;
    // }

  }


  async next() {
    switch (this.status) {
      case 0: {
        this.status += 1;
        break;
      }
      case 1: {
        //statements;
        console.log(this.name)
        if (this.name) {
          this.status += 1;
          break;
        }

        else {
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Please Enter Valid Name!',
            buttons: [{
              text: 'Try Again!', cssClass: 'my-custom-class', handler: (blah) => {
                // this.router.navigate(['/tabs/patients'])
              }
            }]
          });
          await alert.present();
          break;
        }
        //  break;
      }
      case 2: {
        //statements;
        if (this.phone_no) {
          this.status += 1;
          break;
        }

        else {
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Please Enter Valid Phone Number!',
            buttons: [{
              text: 'Try Again!', cssClass: 'my-custom-class', handler: (blah) => {
                // this.router.navigate(['/tabs/patients'])
              }
            }]
          });
          await alert.present();
          break;
        }

      }

      case 3: {
        //statements;
        if (this.age > 0 && this.age < 100) {
          this.status += 1;
          break;
        }

        else {
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Please Enter Valid Age!',
            buttons: [{
              text: 'Try Again!', cssClass: 'my-custom-class', handler: (blah) => {
                // this.router.navigate(['/tabs/patients'])
              }
            }]
          });
          await alert.present();
          break;
        }

      }
    }
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
  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: CroppedEvent) {
    console.log(event.file.size)
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img1 = event.file;
      this.base64 = event.base64;
    }

  }

  fileChangeEvent2(event: any) {
    // console.log('hi');
    this.imageChangedEvent2 = event;
  }

  imageCropped2(event: CroppedEvent) {
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img2 = event.file;
      this.base64_2 = event.base64;
    }
  }

  fileChangeEvent3(event: any) {
    // console.log('hi');
    this.imageChangedEvent3 = event;
  }

  imageCropped3(event: CroppedEvent) {
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img3 = event.file;
      this.base64_3 = event.base64;
    }
  }

  fileChangeEvent4(event: any) {
    // console.log('hi');
    this.imageChangedEvent4 = event;
  }

  imageCropped4(event: CroppedEvent) {
    if (event.file.size > 4000000) {
      this.heavy()
    }
    else {
      this.img4 = event.file;
      this.base64_4 = event.base64;
    }
  }

  async cleanStorage() {
    for (let i = 1; i < 5; i = i + 1) {
      // console.log(i)
      if (localStorage.getItem('photos_' + i)) {
        const removeFile = await Filesystem.deleteFile({
          path: localStorage.getItem('photos_' + i),
          directory: Directory.Data,
        })
        localStorage.removeItem('photos_' + i);
      }
    }
  }

  ngOnDestroy() {
    // console.log("destroy")
    this.cleanStorage();
  }

  // button(){
  //   const button1 = document.getElementById('button1');
  //   button1.style.backgroundImage =  this.base64;
  // }

  async save() {
    if (this.From_storage) {

      this.img1 = localStorage.getItem('photos_1')
      this.img2 = localStorage.getItem('photos_2')
      this.img3 = localStorage.getItem('photos_3')
      this.img4 = localStorage.getItem('photos_4')
      if (this.img1) {
        var readFile = await Filesystem.readFile({
          path: this.img1,
          directory: Directory.Data
        });
        this.img1 = readFile.data;
      }
      // console.log(this.im
      if (this.img2) {
        var readFile2 = await Filesystem.readFile({
          path: this.img2,
          directory: Directory.Data
        });
        this.img2 = readFile2.data;
      }
      if (this.img3) {
        console.log(this.img3)
        var readFile3 = await Filesystem.readFile({
          path: this.img3,
          directory: Directory.Data
        });
        this.img3 = readFile3.data;
      }
      if (this.img4) {
        console.log("amir")
        console.log(this.img4)
        var readFile4 = await Filesystem.readFile({
          path: this.img4,
          directory: Directory.Data
        });
        this.img4 = readFile4.data;
      }
    }
    const loading = await this.loadingcontroller.create({
      message: 'Loading ...',
      duration: 2000
    });
    loading.present();
    var variable: any = localStorage.getItem(ID);
    var variable2: number = +variable;
    var my_age: number = +this.age;
    this.createpatientgql.mutate({
      Name: this.name,
      id: variable2,
      age: my_age,
      Phone_no: this.phone_no,
      // Profile:this.pro_pic,
      Pics: {
        smileImage: this.img1,
        sideImage: this.img2,
        fullSmileImage: this.img3,
        optionalImage: this.img4
      }


    }).subscribe(next => {
      // console.log(next);
      if (next.data.createPatient.token != null) {
        loading.dismiss()
        this.router.navigate(['/tabs/patients']);
        // console.log(this.username)
      }
    },
      // async errors=>{
      //   // console.log(errors)
      //   const alert = await this.alertcontroller.create({
      //     cssClass: 'my-custom-class',
      //     // header: 'Alert',
      //     // subHeader: 'Subtitle',
      //     message: 'Invalid Creditentials',
      //     buttons: [{text:'Try Again!',cssClass:'my-custom-class'}]
      //   });
      //   loading.dismiss()
      //   await alert.present();

      // }
    );
  }


  check(ev: any) {
    // const ew = ev.key.charCodeAt();
    // if(!this.age){
    //   alert("لطفا زبان خود را عوض کنید")
    //   this.age=0;
    // }// TS will throw an error here
    // else{
    //   console.log(this.age) 
    // }
    // this.age = this.fixNumbers(this.age);
  }

  // check(evt){
  //   this.phone_no = this.fixNumbers(this.phone_no);
  // }

  checkPhone(ev: any) {
    // const ew = ev.key.charCodeAt();
    // if(!this.phone_no){
    //   alert("لطفا زبان خود را عوض کنید")
    //   this.phone_no ="0";
    // }// TS will throw an error here
    // else{
    //   // console.log(this.age) 
    // }
    this.phone_no = this.fixNumbers(this.phone_no);
  }

  fixNumbers = function (str) {
    var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    var arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    if (typeof str === 'string') {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }



}
