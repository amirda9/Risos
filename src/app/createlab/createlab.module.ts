import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatelabPageRoutingModule } from './createlab-routing.module';

import { CreatelabPage } from './createlab.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatelabPageRoutingModule,TranslateModule
  ],
  declarations: [CreatelabPage]
})
export class CreatelabPageModule {}
