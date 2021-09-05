import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID, ErrorHandler, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxStarsModule } from 'ngx-stars';
import { NgxMapboxGLModule } from 'mapir-angular-component';
import * as Sentry from "@sentry/angular";


import { JoyrideModule } from 'ngx-joyride';
import '@capacitor-community/camera-preview';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translate/', '.json');
}

Sentry.init({ dsn: "https://c3b8f701661842ee866cd0041c71db32@o951247.ingest.sentry.io/5900047" });


export class SentryIonicErrorHandler extends ErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      Sentry.captureException(error.originalError || error);
    } catch (e) {
      console.error(e);
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [JoyrideModule.forRoot(),NgxMapboxGLModule,NgxStarsModule,TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
}), BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, NgbModule, GraphQLModule, CommonModule, FormsModule,
ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}),
],
  providers: [{provide: ErrorHandler, useClass: SentryIonicErrorHandler},{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },,],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(trace: Sentry.TraceService){}
}


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
