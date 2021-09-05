import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabsChoosePageRoutingModule } from './labs-choose-routing.module';

import { LabsChoosePage } from './labs-choose.page';
import { SharedModule } from '../shared.module';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabsChoosePageRoutingModule,
    SharedModule,
  ],
  declarations: [LabsChoosePage]
})
export class LabsChoosePageModule {}
