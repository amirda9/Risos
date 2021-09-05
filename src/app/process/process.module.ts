import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessPageRoutingModule } from './process-routing.module';

import { ProcessPage } from './process.page';
import { SharedModule } from '../shared.module';
import { BrowserModule } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [ProcessPage]
})
export class ProcessPageModule {}
