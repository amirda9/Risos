import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabCPageRoutingModule } from './lab-c-routing.module';

import { LabCPage } from './lab-c.page';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabCPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [LabCPage]
})
export class LabCPageModule {}
