import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared.module';
import { StarRating, StarRatingModule } from 'angular-star-rating';
import { NgxStarsModule } from 'ngx-stars';
import { JoyrideModule } from 'ngx-joyride';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    TranslateModule,
    NgxStarsModule,
    JoyrideModule.forChild()
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
