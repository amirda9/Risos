import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {

  @Input() name:string;
  @Input() img:any;
  @Input() status:any;
  @Input() date:string;

  constructor() { }

  ngOnInit() {
    this.date = this.date.slice(0,10);
    console.log(this.date)
  }

}
