import { HideKeyboardModule } from 'hide-keyboard';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvailableResult, BiometryType, IsAvailableOptions, NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss']
})
export class FingerprintComponent implements OnInit {
  @Output() closeModal = new EventEmitter<any>();
  isScanning  = false;
  isNotScanning = true;
  todo=true;
  constructor() { }

  ngOnInit(): void {
this.biometric();

  }

  biometric() {
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
      const isAvailable = result.isAvailable;
      const isFingerPrintId = result.biometryType == BiometryType.FINGERPRINT;
      if (isAvailable && isFingerPrintId) {

        NativeBiometric.verifyIdentity({
          reason: "For Security",
          title: "Log in",
          subtitle: "Authenticate User",
          description: "Only authorized user can use app",
        }).then((res: any) => {
          this.isScanning = true
          this.close();
        }).catch((err) => {
          this.isScanning = false;
          this.biometric();
        })

      }
    });
    
  }

  /**
   * close Fingeprint Modal 
   */
  close() {
    this.todo = false;
    setTimeout(() => {
     this.closeModal.emit(); 
    }, 1000);
    
 }

}
