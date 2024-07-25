import { ErrorHandler, Injectable, NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RequestService } from './service/request.service';
import { UtilitiesService } from './service/utilities.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZlivioDashboardComponent } from './zlivio-dashboard/zlivio-dashboard.component';
import { SyncContactsComponent } from './sync-contacts/sync-contacts.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { SliderComponent } from './slider/slider.component';
import { MatSelectModule } from '@angular/material/select';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { FingerprintComponent } from './modals/fingerprint/fingerprint.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FaceUnlockComponent } from './modals/face-unlock/face-unlock.component';
import { ForgetPasswordComponent } from './modals/forget-password/forget-password.component';
import { ZlivioEnterPhoneComponent } from './zlivio-enter-phone/zlivio-enter-phone.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './filter/filter.pipe';
import { UploaderComponent } from './uploader/uploader.component';
import { ContactAccessComponent } from './contact-access/contact-access.component';
import { SelectLanguageComponent } from './select-language/select-language.component';3
import { HideKeyboardModule } from 'hide-keyboard';
import 'tw-elements';
import 'animate.css';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error: any) {
    console.log('*#*ERROR: ', error);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivacyPolicyComponent,
    DashboardComponent,
    ZlivioDashboardComponent,
    SyncContactsComponent,
    ProfileComponent,
    SliderComponent,
    ContactListComponent,
    LoginDashboardComponent,
    FingerprintComponent,
    FaceUnlockComponent,
    ForgetPasswordComponent,
    ZlivioEnterPhoneComponent,
    SearchPipe,
    UploaderComponent,
    ContactAccessComponent,
    SelectLanguageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HideKeyboardModule,
    ToastrModule.forRoot(),

  ],
  providers: [RequestService, UtilitiesService, ToastrService, { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
