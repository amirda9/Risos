import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'jalali-moment';
import { LANG } from '../constants';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {

  @Input() name:string;
  @Input() img:any;
  @Input() status:any;
  @Input() date:any;

  constructor(private transService:TranslateService) { }

  ngOnInit() {
    // console.log(this.transService.currentLang)
    this.date = this.date.slice(0,10);
    console.log(this.date)
    if(localStorage.getItem(LANG)=="en"){
      // console.log("its english")s
      
    }
    else{
      this.date = moment(this.date, 'YYYY-MM-DD').locale('fa').format('YYYY-MM-DD');
      // console.log("its persian")
    }
  }

}
