import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { JoyrideModule } from 'ngx-joyride';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    JoyrideModule.forChild()
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
