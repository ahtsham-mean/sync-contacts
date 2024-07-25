import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AvailableResult, BiometryType, NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-face-unlock',
  templateUrl: './face-unlock.component.html',
  styleUrls: ['./face-unlock.component.scss']
})

export class FaceUnlockComponent implements OnInit {
  @Output() closeModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  biometric() {
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
      alert(JSON.stringify(result));
      const isAvailable = result.isAvailable;
      const isFaceUnlockId = result.biometryType == BiometryType.FACE_ID;
      alert(isFaceUnlockId)
      alert(JSON.stringify(isAvailable));
      if(isAvailable && isFaceUnlockId){
    
        NativeBiometric.verifyIdentity({
          reason: "For Security",
          title: "Log in",
          subtitle: "Authenticate User",
          description: "Only authorized user can use app",
        }).then((res:any)=>{
          alert('SUCCESS!!');
          this.close()
        }).catch((err)=>{
          alert('FAIL!');
        })
      }
    });
  }
  
  close(){
    this.closeModal.emit();
  }

}
