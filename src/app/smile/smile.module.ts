import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmilePageRoutingModule } from './smile-routing.module';

import { SmilePage } from './smile.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmilePageRoutingModule,
    SharedModule,
  ],
  declarations: [SmilePage]
})
export class SmilePageModule {}
