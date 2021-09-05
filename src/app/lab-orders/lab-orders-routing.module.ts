import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabOrdersPage } from './lab-orders.page';

const routes: Routes = [
  {
    path: '',
    component: LabOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabOrdersPageRoutingModule {}
