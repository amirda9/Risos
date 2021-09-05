import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LabCardComponent } from "./lab-card/lab-card.component";
import { OrderCardComponent } from "./order-card/order-card.component";
import { PCardComponent } from "./p-card/p-card.component";
import {NgxPhotoEditorModule} from "ngx-photo-editor";
import { ResizeComponent } from "./resize/resize.component";
import { PhotoeditorComponent } from "./photoeditor/photoeditor.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { CaptureComponent } from "./capture/capture.component";
import { ModalComponent } from "./invoice/modal/modal.component";
import { NgxStarsModule } from "ngx-stars";
import { DatepickerComponent } from "./labs-choose/datepicker/datepicker.component";
import { NgPersianDatepickerModule } from "ng-persian-datepicker";
import { TicketComponent } from "./lab-orders/ticket/ticket.component";

@NgModule({
  imports:[IonicModule,CommonModule,FormsModule, NgPersianDatepickerModule],
  declarations: [PCardComponent,OrderCardComponent,LabCardComponent,ResizeComponent,PhotoeditorComponent,CaptureComponent,ModalComponent,DatepickerComponent,TicketComponent],
  exports:[PCardComponent,OrderCardComponent,LabCardComponent,ResizeComponent,PhotoeditorComponent,TranslateModule,CaptureComponent,ModalComponent,DatepickerComponent,TicketComponent]
})
export class SharedModule {}
