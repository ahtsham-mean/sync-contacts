import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';
@Component({
  selector: 'app-zlivio-dashboard',
  templateUrl: './zlivio-dashboard.component.html',
  styleUrls: ['./zlivio-dashboard.component.scss']
})
export class ZlivioDashboardComponent implements OnInit {
  contactsLength: any = 0;
  isUploadContacts = true;
  isShowUploadButton ;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList() {
    Contacts.getContacts().then((result: any) => {

      if (result?.contacts?.length) {
        this.contactsLength = result.contacts.length;
      }
    });
  }

  uploadContacts(){

  }

  navigateToContactList() {
    this.router.navigate(['/contact-list']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToSlider() {
    this.router.navigate(['/slider']);
  }
}
