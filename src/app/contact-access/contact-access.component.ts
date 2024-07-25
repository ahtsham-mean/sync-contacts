import { Contacts } from '@capacitor-community/contacts';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-access',
  templateUrl: './contact-access.component.html',
  styleUrls: ['./contact-access.component.scss']
})
export class ContactAccessComponent implements OnInit {
@Input() isHide:any
@Output() hideSlider = new EventEmitter();
@Output() hideaccess = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backBtn(){
    this.isHide=false
    this.hideaccess.emit(this.isHide)
  }

  getAccess(){
    const permission:any=Contacts.getPermissions();
    if (permission?.contacts !== 'granted' && permission?.granted !== true) {
      // this.router.navigate(['/slider']);
      this.isHide=false
      this.hideSlider.emit(this.isHide)
    }
  }
}
