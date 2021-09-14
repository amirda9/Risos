import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparisonPageRoutingModule } from './comparison-routing.module';

import { ComparisonPage } from './comparison.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparisonPageRoutingModule,
    TranslateModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ComparisonPage]
})
export class ComparisonPageModule {}
