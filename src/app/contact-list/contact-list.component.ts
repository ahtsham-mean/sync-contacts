import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from '../service/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  selectedContactsList: any[] = [];
  selectedStatus: any[] = [];
  show: boolean = false;
  showCheckBox: boolean = false;
  searchText = "";
  animate:boolean = false;

  constructor(public requestService: RequestService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getContacts();
    this.getContactStatus();
  }

  async getContacts() {
    // Checks plugin permission and request for user's permission.
    const permission: any = await Contacts.getPermissions();

    if (permission?.contacts !== 'granted' && permission?.granted !== true) {
      this.toastr.info('Device Permission not granted, please enable app permissions.', 'Info');
      return;
    }

    Contacts.getContacts().then((result: any) => {
      if (result?.contacts?.length) {
        this.contacts = result.contacts;
        this.contacts.forEach((element: any) => {
          delete element.photoThumbnail
        });

      } else {
        this.toastr.error('Contacts not found', 'Warning');
      }
    }).catch(error => {
      this.toastr.error('Get Contacts Error', 'Warning');

    });
  }

  /**
   * get Contact Status 
   */
  getContactStatus() {
    let urlStr = 'https://notifier.crm.zlivio.com/contacts/status'
    this.requestService.getContactStatus(urlStr).subscribe((result: any) => {

      // this.selectedStatus = result.contact_status;
    })
    this.selectedStatus = [
      { label: "Prospects", value: 1 },
      { label: "Active", value: 2 },
      { label: "closed", value: 3 },
    ]
  }

  // animation
  animation(){
    this.animate = !this.animate;
  }
  
  // custom dropdown
  openDropdown(i: any) {
    this.show = !this.show;
  }

  /**
   * status current
   */
  update(e: any, i: any) {
    this.contacts[i].status = e.target.value;
  }

  selectedContacts(contact: any) {
    if (contact.checked) {
      this.selectedContactsList.push(contact);
    }
    else {
      const currentIndex = this.selectedContactsList.findIndex((contacts: any) => contacts.contactId === contact.contactId);
      this.selectedContactsList.splice(currentIndex, 1);
    }
  }

  backToDashboard() {
    this.router.navigate(['/zlivio-dashboard']);
  }

  toggleCheckBox() {
    this.showCheckBox = !this.showCheckBox;
  }
}