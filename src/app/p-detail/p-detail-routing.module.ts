import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDetailPage } from './p-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDetailPageRoutingModule {}
