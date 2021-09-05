import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    TranslateModule,
    NgxPhotoEditorModule,
  ],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
