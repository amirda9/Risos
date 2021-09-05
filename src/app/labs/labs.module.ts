import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabsPageRoutingModule } from './labs-routing.module';

import { LabsPage } from './labs.page';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabsPageRoutingModule,
    SharedModule,
    TranslateModule,
    NgxStarsModule
    ],
  declarations: [LabsPage]
})
export class LabsPageModule {}
