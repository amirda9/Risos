import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {LabsQuery,LabsGQL, Search_LabGQL, Search_LabQuery, LabratedGQL} from 'src/generated/graphql'
import { map } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { NgxStarsComponent } from 'ngx-stars';
import { ID } from '../constants';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.page.html',
  styleUrls: ['./labs.page.scss'],
})
export class LabsPage implements OnInit {



  name:any = "Arman Laboratory";
  number:any = 6;
  // labs:Observable< LabsQuery['allLab']['edges']>;
  labs:any
  lab_s:Observable< Search_LabQuery['allLab']['edges']>;
  text:string;
  searched:boolean;
  search_res:any;
  constructor(private labsgql:LabsGQL , private router:Router , private search_l:Search_LabGQL , private labrated:LabratedGQL) { }

  ngOnInit() {
    this.labs = this.labsgql.watch().valueChanges.pipe(map(result => result.data.allLab.edges));
    // console.log(this.labs)
    // this.starsComponent.setRating(0);
  }

  doRefresh(e){
    this.labs = this.labsgql.watch().valueChanges.pipe(map(result => result.data.allLab.edges));
    setTimeout(() => {
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }

  labOrders(e){
    let navigationExtras: NavigationExtras = {
      state: {
        id: e
      }
    }
    this.router.navigate(['/lab-profile'],navigationExtras);
  }

  byRate(){
    this.labs = this.labrated.watch().valueChanges.pipe(map(result => result.data.allLab.edges));
  }


  search(){
    this.labs = this.search_l.watch({name:this.text}).valueChanges.pipe(map(result => result.data.allLab.edges));
    // this.search_l.watch({
    //   name:this.text
    // }).valueChanges.subscribe(res=>{
    //   this.search_res = res.data.allLab;
    // })
    // this.searched = true;
  }
}
