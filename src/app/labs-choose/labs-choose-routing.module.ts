import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabsChoosePage } from './labs-choose.page';

const routes: Routes = [
  {
    path: '',
    component: LabsChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabsChoosePageRoutingModule {}
