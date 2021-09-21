import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { VerifyGQL } from 'src/generated/graphql';
import { AUTHTOKEN, LANG, P_ID } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  deferredPrompt;
  constructor(private verifygql:VerifyGQL,private router:Router,private translate: TranslateService, private tost: ToastController,private loadingcontroller:LoadingController) { }


  async ngOnInit() {


    if(localStorage.getItem(AUTHTOKEN)){
      // const loading = await this.loadingcontroller.create({
      //   message:  'Loading ...'
      //   });
      //   loading.present();
      this.verifygql.mutate({
        token:localStorage.getItem(AUTHTOKEN)
      }).subscribe(res=>{
        if(res.data.verifyToken.payload){
          // loading.dismiss()
          this.router.navigate(['/tabs/main']);
        }
      })
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      this.presentToastWithOptions();
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    });
  }

  async presentToastWithOptions() {
    const toast = await this.tost.create({
      header: 'Install',
      message: 'Do you want to install this app ?',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'close',
          text: 'NO',
          handler: () => {
            console.log('NO clicked');
          }
        }, {
          text: 'Yes',
          icon:'download-outline',
          role: 'cancel',
          handler: async () => {
            console.log('Cancel clicked');
            this.deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await this.deferredPrompt.userChoice;
            // Optionally, send analytics event with outcome of user choice
            console.log(`User response to the install prompt: ${outcome}`);
            // We've used the prompt, and can't use it again, throw it away
            this.deferredPrompt = null;
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem(LANG,language)
  }
}
