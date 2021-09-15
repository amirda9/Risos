import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CroppedEvent } from 'ngx-photo-editor';
import { AuthService } from '../auth.service';
import { LocGQL, ProfileGQL, ProfilePicGQL, ProfilePicMutation } from '../../generated/graphql';
import { ID } from '../constants';
import { ElementRef } from '@angular/core';
import { Apollo } from 'apollo-angular';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {

  first: string = "";
  last: string = "";
  mobile: string ;
  land: string = "";
  email: string ;
  imageChangedEvent: any;
  address: string;
  base64: any;
  public img: any;
  file: File;
  pro_status: boolean = false;
  edit:boolean=false;
  profilePic: string;
  @ViewChild('customimage') myDiv: ElementRef;

  profile_: ProfilePicMutation;
  constructor(private profileGQL:ProfileGQL,private authService: AuthService, private router: Router, private pro_picgql: ProfilePicGQL,
     private apollo: Apollo, private locGQL:LocGQL) {
    profileGQL.watch({id:"Profile:"+localStorage.getItem(ID)}).valueChanges.subscribe(res=>{
      this.mobile = res.data.Profile.phoneNumber;
      this.email = res.data.Profile.email;
      this.profilePic = res.data.Profile.profilePic;
    })
  }


  //  fileUpload(file){
  //    this.pro_picgql.client
  //    this.pro_picgql.mutate({
  //     id:"37",
  //     profilePic:files
  //   }).subscribe(res=>{
  //     console.log(res.data.updateProfile.status);
  //   })
  //   // this.apollo.mutate<any>({
  //   //   mutation:uploadmutation,
  //   //   variables: {
  //   //     file: this.file
  //   //   },
  //   //   context: {
  //   //      useMultipart: true
  //   //   }
  //   // }).subscribe(({ data }) => {
  //   //     console.log(data);
  //   // });
  //  }

  ngOnInit() {
  }

  editEnable(){
    if(this.edit == true){
      this.save();
    }
    else{
    this.edit = !this.edit;
    }
  }

  ngAfterViewInit() {
    document.getElementById("getFile").onchange = (e?: HTMLInputEvent) => {
      var files: any = e.target.files[0];
      //   console.log(files);
      this.img = files;
      // localStorage.setItem(Pic,files);
    }
  }



  fileChangeEvent(event: Event) {
    this.pro_status = true;
    this.imageChangedEvent = event;
    // console.log(event.target);
    // this.pro_picgql.mutate({
    //   id:"37",
    //   profilePic:target.files[0]
    // }).subscribe(res=>{
    //   console.log(res.data.updateProfile.status);
    // })
  }

  myfunction(event: Event) {
    // console.log(event.currentTarget.addEventListener)

    // this.img = localStorage.getItem(Pic);
    console.log(this.img);
  }



  imageCropped(event: CroppedEvent) {
    this.base64 = event.base64;
    let img = event.file;
    console.log(img);
    this.pro_picgql.mutate(
      {
        id: localStorage.getItem(ID),
        profilePic:img
      }).subscribe(res => {
        console.log(res.data.updateProfile.status);
      })
    // this.img = this.base64;
    // this.pro_picgql.mutate({
    //   id:"37",
    //   profilePic:this.img
    // }).subscribe(res=>{
    //   console.log(res.data.updateProfile.status);
    // })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }


  save(){
    this.edit=false;
  }


  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          this.locGQL.mutate({
            long:resp.coords.latitude,
            lat:resp.coords.longitude,
            profileId:+localStorage.getItem(ID)
          }).subscribe(res=>{
            console.log(res);
          })
        },
        err => {
          // reject(err);
          console.log(err)
        });
    });

  }

}
