import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RisosPageRoutingModule } from './risos-routing.module';

import { RisosPage } from './risos.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RisosPageRoutingModule,
    SharedModule
  ],
  declarations: [RisosPage]
})
export class RisosPageModule {}
