import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-card',
  templateUrl: './lab-card.component.html',
  styleUrls: ['./lab-card.component.scss'],
})
export class LabCardComponent implements OnInit {

  @Input() Name:string;
  @Input() Number:number;
  @Input() src:any;
  constructor() { }

  ngOnInit() {}

}
