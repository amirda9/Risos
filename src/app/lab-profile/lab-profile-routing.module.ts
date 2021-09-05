import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabProfilePage } from './lab-profile.page';

const routes: Routes = [
  {
    path: '',
    component: LabProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabProfilePageRoutingModule {}
