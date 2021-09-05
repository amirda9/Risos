import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'jalali-moment';

// @Pipe({
//   name: 'jalali'
// })
// export class JalaliPipe implements PipeTransform {
//   transform(value: any, args?: any): any {
//     let MomentDate = moment(value, 'YYYY/MM/DD');
//     return MomentDate.locale('fa').format('YYYY/M/D');
//   }
// }


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  date:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}


  save() {
    // console.log(this.date)
    let data = moment.from(this.date, 'fa', 'YYYY-MM-DD').locale('en')
    .format('YYYY-MM-DD');
    console.log("data is" + data)
    this.modalController.dismiss(data);
  }

}
