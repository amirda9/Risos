import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { JoyrideService } from 'ngx-joyride';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabratedGQL, LabratedQuery, PatientGQL, PatientsGQL, PatientsQuery, ProfileGQL } from 'src/generated/graphql';
import { AuthService } from '../auth.service';
import { ID } from '../constants';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPage } from '../tabs/tabs.page';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  labs:Observable< LabratedQuery['allLab']['edges']>;
  patients:Observable< PatientsQuery['allPatient']['edges']>;

  PhoneNumber:string;
  constructor(private patientsgql:PatientsGQL,private readonly joyrideService: JoyrideService,private profile:ProfileGQL,private authService:AuthService,private router:Router , private labrated:LabratedGQL) {
    this.patients = this.patientsgql.watch({dr:localStorage.getItem(ID)}).valueChanges.pipe(map(result => result.data.allPatient.edges));
  }

  tut(){
        this.joyrideService.startTour(
      { steps: ['firstStep'] } // Your steps order
  );
  }


  ngOnInit() {



    this.profile.watch({id:"Profile:"+localStorage.getItem(ID)}).valueChanges.subscribe(res=>{
      this.PhoneNumber = res.data.Profile.phoneNumber;
    })

    this.labs = this.labrated.watch().valueChanges.pipe(map(result => result.data.allLab.edges));
  }

  @ViewChild(IonSlides) slides: IonSlides;
   slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesperview:3.5,
   };

   slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  // posts:any[] = [
  //   {
  //     name:"Arman Laboratory",
  //     src:"../../assets/lab1.png",
  //   },
  //   {
  //     name:"Omid Laboratory",
  //     src:"../../assets/lab2.jpg",
  //   },
  //   {
  //     name:"Arman Laboratory",
  //     src:"../../assets/lab1.png",
  //   },
  //   {
  //     name:"Omid Laboratory",
  //     src:"../../assets/lab2.jpg",
  //   },
  // ];

}
