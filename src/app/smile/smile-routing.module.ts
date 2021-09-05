import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmilePage } from './smile.page';

const routes: Routes = [
  {
    path: '',
    component: SmilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmilePageRoutingModule {}
