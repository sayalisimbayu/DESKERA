import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FullCalendarModule } from 'ng-fullcalendar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxGalleryModule } from 'ngx-gallery';

import * as $ from 'jquery';
import { SimpleStoreManagerModule } from './storemanager/storemanager.module';
import { LazyLoaderService } from './services/lazy-loader.service';
import { LAZY_WIDGETS } from './services/tokens';
import { lazyArrayToObj } from './services/lazy-widgets';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    routing,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RichTextEditorAllModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule.forRoot(),
    LeafletModule.forRoot(),
    NgxGalleryModule,
    SimpleStoreManagerModule
  ],
  providers: [LazyLoaderService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }],
  bootstrap: [AppComponent]
})
export class AppModule {}
