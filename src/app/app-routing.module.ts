import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAccessComponent } from './contact-access/contact-access.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FaceUnlockComponent } from './modals/face-unlock/face-unlock.component';
import { FingerprintComponent } from './modals/fingerprint/fingerprint.component';
import { ForgetPasswordComponent } from './modals/forget-password/forget-password.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SliderComponent } from './slider/slider.component';
import { SyncContactsComponent } from './sync-contacts/sync-contacts.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ZlivioDashboardComponent } from './zlivio-dashboard/zlivio-dashboard.component';
import { ZlivioEnterPhoneComponent } from './zlivio-enter-phone/zlivio-enter-phone.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-design',
    component: LoginDashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'zlivio-dashboard',
    component: ZlivioDashboardComponent
  },
  {
    path: 'sync-contacts',
    component: SyncContactsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
  ,
  {
    path: 'privacyPolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'enter-phone',
    component: ZlivioEnterPhoneComponent
  },
  {
    path: 'fingerprint',
    component: FingerprintComponent
  },
  {
    path: 'forget',
    component: ForgetPasswordComponent
  },
  {
    path: 'faceunlock',
    component: FaceUnlockComponent
  },
  {
     path: 'uploader',
     component: UploaderComponent
  },
  {
    path: 'contact-assess',
    component: ContactAccessComponent,
  },
  {
    path: 'select-language',
    component: SelectLanguageComponent,
  },
  {
    path: '',
    redirectTo: 'login-design',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
