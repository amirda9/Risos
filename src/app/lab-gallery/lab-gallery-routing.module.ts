import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabGalleryPage } from './lab-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: LabGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabGalleryPageRoutingModule {}
