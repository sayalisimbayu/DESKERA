import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
// import { routing } from './app.routing';
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
import { AuthInterceptor } from './services/auth/authIntercepter';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { AppRoutingModule } from './app.routing';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // routing,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RichTextEditorAllModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule.forRoot(),
    LeafletModule.forRoot(),
    NgxGalleryModule,
    SimpleStoreManagerModule
  ],
  providers: [LazyLoaderService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router, private authsrv: AuthService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authsrv.isLoggedOut()) {
      this.router.navigate(['/authentication/page-login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }
}
