import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePatientPageRoutingModule } from './create-patient-routing.module';
import { CreatePatientPage } from './create-patient.page';
import {NgxPhotoEditorModule} from "ngx-photo-editor";
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePatientPageRoutingModule,
    NgxPhotoEditorModule,
    TranslateModule
  ],
  declarations: [CreatePatientPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CreatePatientPageModule {}
