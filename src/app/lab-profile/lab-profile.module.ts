import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabProfilePageRoutingModule } from './lab-profile-routing.module';

import { LabProfilePage } from './lab-profile.page';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabProfilePageRoutingModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDB_-uDs2IQZ7O_4by7TKaqNXsdJ5N3sus'
    })
  ],
  declarations: [LabProfilePage]
})
export class LabProfilePageModule {}
