import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LabGQL, LocGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-lab-profile',
  templateUrl: './lab-profile.page.html',
  styleUrls: ['./lab-profile.page.scss'],
})
export class LabProfilePage implements OnInit {

  Name:string="Arman";
  phone_no:string;
  land_no:string;
  detail:any;
  address:any;
  id:string;
  profile:any;

  zoom: number = 8;

  // initial center position for the map
  // lat: number = 51.673858;
  // lng: number = 7.815982;

  edit = false;
  profilePic: string;

  constructor(private route:ActivatedRoute , private router:Router , private lab_gql:LabGQL, private locGQL:LocGQL) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });
  }


  ngOnInit() {

    var my ;
    my = "Lab:"+this.id;
    // console.log(my)
    this.lab_gql.watch({
      id:my
    }).valueChanges.subscribe(res=>{
      this.Name = res.data.Lab.relatedProfile.firstName;
      this.phone_no = res.data.Lab.relatedProfile.phoneNumber;
      this.land_no = res.data.Lab.relatedProfile.telephoneNumber;
      this.profile = res.data.Lab.relatedProfile._id;
      this.profilePic = res.data.Lab.relatedProfile.profilePic;
      // console.log(res)
    })
  }

  order(){

  }

  gallery(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: this.id,
      }
    }
    this.router.navigate(['/lab-gallery'],navigationExtras);
  }

  labOrders(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: this.id,
        profile:this.profile
      }
    }
    this.router.navigate(['/lab-orders'],navigationExtras);
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          this.locGQL.mutate({
            long:resp.coords.latitude,
            lat:resp.coords.longitude,
            profileId:this.profile
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
