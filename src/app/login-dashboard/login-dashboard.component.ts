import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvailableResult, BiometryType, NativeBiometric } from "capacitor-native-biometric";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss']
})
export class LoginDashboardComponent implements OnInit {
  pass: string[] = [];
  pin = ['1', '2', '3', '4'];
  wrongFingerPrint = false;
  openFingerPrints = false;
  isFingerSecurityID = false;
  isFaceSecurityID = false;
  openFaceId = false;
  display: string[] = [];
  filter: boolean = false;
  eventCounter = 0;
  isValidate = true;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.biometric();
  }

  numberBtn(val: any) {
    if (this.eventCounter >= 0 && this.eventCounter < 4) {
      val ? this.eventCounter++ : 0;
      let nextId = (this.eventCounter).toString();
      if (this.display.length < 4) {
        this.display.push(val);
      }
      console.log(this.display)
      document.getElementById(nextId).focus();
      if (Number(nextId) == 4) {
        console.log(this.display.join(''));
      }
      console.log(this.eventCounter);
    }
  }

  clearButton() {
    if (this.eventCounter >= 1) {
      this.display = this.display.splice(0, this.display.length - 1);
      this.eventCounter--;
      this.isValidate = true;
    }

  }

  openFingerPrint() {
    this.filter = true;
    this.openFingerPrints = !this.openFingerPrints;
  }

  openFaceUnlock() {
    this.openFaceId = !this.openFaceId;
  }

  forgetPassword() {
    this.router.navigate(['/forget']);
  }

  biometric() {
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
      alert(JSON.stringify(result))
      this.isFaceSecurityID = result.biometryType == BiometryType.FACE_AUTHENTICATION;
      this.isFingerSecurityID = result.biometryType == BiometryType.FINGERPRINT;
    });
  }

  login() {
    if (this.display.join('') == this.pin.join('')) {
      this.isValidate = true;
      this.router.navigate(['/slider'])
    } else {
      this.isValidate = false;
    }
  }

  navigateToZlivioEnterPhone() {
    this.router.navigate(['/enter-phone']);
  }
}
