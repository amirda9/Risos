import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'labs',
        loadChildren: () => import('../labs/labs.module').then(m => m.LabsPageModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('../patients/patients.module').then(m => m.PatientsPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)
      },
      {
        path: 'lab-profile',
        loadChildren: () => import('../lab-profile/lab-profile.module').then(m => m.LabProfilePageModule)
      },
      {
        path: 'p-detail',
        loadChildren: () => import('../p-detail/p-detail.module').then(m => m.PDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
