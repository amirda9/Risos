import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabCPage } from './lab-c.page';

const routes: Routes = [
  {
    path: '',
    component: LabCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabCPageRoutingModule {}
