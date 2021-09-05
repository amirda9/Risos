import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturexPageRoutingModule } from './capturex-routing.module';

import { CapturexPage } from './capturex.page';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturexPageRoutingModule,
    SharedModule,TranslateModule
  ],
  declarations: [CapturexPage]
})
export class CapturexPageModule {}
