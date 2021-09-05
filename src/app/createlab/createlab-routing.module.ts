import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatelabPage } from './createlab.page';

const routes: Routes = [
  {
    path: '',
    component: CreatelabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatelabPageRoutingModule {}
