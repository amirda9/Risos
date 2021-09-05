import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabOrdersPageRoutingModule } from './lab-orders-routing.module';

import { LabOrdersPage } from './lab-orders.page';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabOrdersPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [LabOrdersPage]
})
export class LabOrdersPageModule {}
