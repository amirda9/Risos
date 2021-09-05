import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import {NgxPhotoEditorModule} from "ngx-photo-editor";
import { ProfilePage } from './profile.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    NgxPhotoEditorModule,
    TranslateModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
