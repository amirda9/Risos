import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';
import { DID } from '../constants';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage  {

  constructor(private readonly joyrideService: JoyrideService) { }

  ngOnInit() {

    if(localStorage.getItem(DID) != 'DID'){
      console.log("im" , localStorage.getItem(DID))
    }
  }

  // ngAfterViewInit(){
  //   this.joyrideService.startTour(
  //     { steps: ['firstStep', 'secondStep'] } // Your steps order
  // );
  // }


}
