import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactLabPageRoutingModule } from './contact-lab-routing.module';

import { ContactLabPage } from './contact-lab.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactLabPageRoutingModule,
    TranslateModule
  ],
  declarations: [ContactLabPage]
})
export class ContactLabPageModule {}
