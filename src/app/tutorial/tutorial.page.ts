import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  status:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  change(){
    this.status = false;
  }
}
