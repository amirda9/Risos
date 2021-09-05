import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDetailPageRoutingModule } from './p-detail-routing.module';

import { PDetailPage } from './p-detail.page';
import {NgxPhotoEditorModule} from "ngx-photo-editor";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDetailPageRoutingModule,
    NgxPhotoEditorModule,
    TranslateModule
  ],
  declarations: [PDetailPage]
})
export class PDetailPageModule {}
