import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget-pass',
    loadChildren: () => import('./forget-pass/forget-pass.module').then( m => m.ForgetPassPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then( m => m.PatientsPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'labs',
    loadChildren: () => import('./labs/labs.module').then( m => m.LabsPageModule)
  },
  {
    path: 'lab-profile',
    loadChildren: () => import('./lab-profile/lab-profile.module').then( m => m.LabProfilePageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'p-detail',
    loadChildren: () => import('./p-detail/p-detail.module').then( m => m.PDetailPageModule)
  },
  {
    path: 'create-patient',
    loadChildren: () => import('./create-patient/create-patient.module').then( m => m.CreatePatientPageModule)
  },
  {
    path: 'createlab',
    loadChildren: () => import('./createlab/createlab.module').then( m => m.CreatelabPageModule)
  },
  {
    path: 'smile',
    loadChildren: () => import('./smile/smile.module').then( m => m.SmilePageModule)
  },
  {
    path: 'smile/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren:  () => import('./smile/smile.module').then( m => m.SmilePageModule)
  },
  {
    path: 'lab-c',
    loadChildren: () => import('./lab-c/lab-c.module').then( m => m.LabCPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'contact-lab',
    loadChildren: () => import('./contact-lab/contact-lab.module').then( m => m.ContactLabPageModule)
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'lab-orders',
    loadChildren: () => import('./lab-orders/lab-orders.module').then( m => m.LabOrdersPageModule)
  },
  {
    path: 'lab-gallery',
    loadChildren: () => import('./lab-gallery/lab-gallery.module').then( m => m.LabGalleryPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'risos',
    loadChildren: () => import('./risos/risos.module').then( m => m.RisosPageModule)
  },
  {
    path: 'comparison',
    loadChildren: () => import('./comparison/comparison.module').then( m => m.ComparisonPageModule)
  },
  {
    path: 'process',
    loadChildren: () => import('./process/process.module').then( m => m.ProcessPageModule)
  },
  {
    path: 'capturex',
    loadChildren: () => import('./capturex/capturex.module').then( m => m.CapturexPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'create-order',
    loadChildren: () => import('./create-order/create-order.module').then( m => m.CreateOrderPageModule)
  },
  {
    path: 'create-order/:id',
    loadChildren: () => import('./create-order/create-order.module').then( m => m.CreateOrderPageModule)
  },
  {
    path: 'labs-choose',
    loadChildren: () => import('./labs-choose/labs-choose.module').then( m => m.LabsChoosePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
