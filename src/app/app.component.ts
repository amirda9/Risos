import { Component, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { AppModule } from './app.module';
import { DID } from './constants';
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";
import { ErrorHandler } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  showSplash = true;

  constructor(public platform:Platform , private translate: TranslateService ) {
    // translate.setDefaultLang('en');
         // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.init();

    // throw new Error("My first Sentry error!");

  }


  useLanguage(language: string): void {
    this.translate.use(language);
  }

  init(){
    this.platform.ready().then(()=>{
      // this.splash.hide();
      timer(2500).subscribe(()=>{
        this.showSplash = false;
      });
    });
  }


}
