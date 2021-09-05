import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturexPage } from './capturex.page';

const routes: Routes = [
  {
    path: '',
    component: CapturexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturexPageRoutingModule {}
