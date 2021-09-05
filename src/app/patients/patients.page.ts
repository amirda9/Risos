import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {PatientsGQL,PatientsQuery , Search_PGQL} from 'src/generated/graphql';
import { ID, P_ID } from '../constants';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  text:string;
  patients:Observable< PatientsQuery['allPatient']['edges']>;
  search_res:any;
  searched:boolean;
  // patients_S: Observable<({ __typename?: "PatientEdge"; } & { node?: { __typename?: "Patient"; } & { relatedProfile: { __typename?: "Profile"; } & Pick<import("/home/amir/Desktop/risos/src/generated/graphql").Profile, "firstName">; }; })[]>;

  constructor(private router:Router,private patientsgql:PatientsGQL, private search_p:Search_PGQL) { }

  ngOnInit() {
    this.searched = false;
    this.patients = this.patientsgql.watch({dr:localStorage.getItem(ID)}).valueChanges.pipe(map(result => result.data.allPatient.edges));
  }


  search(){

    this.patients = this.search_p.watch({
      name:this.text,
      id:localStorage.getItem(ID)
    }).valueChanges.pipe(map(result => result.data.allPatient.edges));
    this.searched = true;
  }


  doRefresh(e){
    this.patients = this.patientsgql.watch({dr:localStorage.getItem(ID)}).valueChanges.pipe(map(result => result.data.allPatient.edges));
    setTimeout(() => {
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }

  show(e){
    let navigationExtras: NavigationExtras = {
      state: {
        id: e
      }
    };
    this.router.navigate(['/tabs/p-detail'], navigationExtras);
    localStorage.setItem(P_ID,e)
  }
}
