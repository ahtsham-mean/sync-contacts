import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { Router } from '@angular/router';
import { UtilitiesService } from '../service/utilities.service';
import { RequestService } from '../service/request.service';
import { ApiUrl } from '../resource-reference';
import { EUserContact } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts: any[] = [];
  selected: any;
  selectedContactsList: any[] = [];
  selectedStatus: any[] = [];

  constructor(
    public router: Router,
    public utilitiesService: UtilitiesService,
    public requestService: RequestService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
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
        this.contacts.forEach(element => {
          delete element.photoThumbnail
        });

      } else {
        this.toastr.error('Contacts not found', 'Warning');
      }
    }).catch(error => {
      this.toastr.error('Get Contacts Error', 'Warning');
    });
  }

  async getContactList() {
    const contactsPayload: any[] = [];

    Contacts.getContacts().then((result: any) => {

      if (result?.contacts?.length) {
        this.contacts = result.contacts;
        this.contacts.forEach(element => {
          delete element.photoThumbnail
        });

        const user: any = this.utilitiesService.decryptToken();
        const today = new Date();

        this.selectedContactsList.forEach(contact => {
          const emailStr = contact.emails.map((x: any) => x.address).join(); // Comma separated emails array
          const phoneStr = contact.phoneNumbers.map((x: any) => x.number).join(); // Comma separated numbers array

          const data = {
            user_id: user.sub,
            name: contact.displayName,
            email: emailStr,
            phone: phoneStr,
            contact_id: contact.contactId,
            status: contact.status,
            created_by: user.sub,
            created_date: today,
            source: EUserContact.MobileSync
          }
          contactsPayload.push(data);
        });
        this.syncContact(contactsPayload);
      } else {
        this.toastr.error('Contacts not found', 'Warning');
      }
    }).catch(error => {
      this.toastr.error(`Get Contacts Error: ${error}`, 'Warning');
    });
  }

  selectedContacts(contact: any) {
    if (contact.checked) {
      this.selectedContactsList.push(contact);
    }
    else {
      const currentIndex = this.selectedContactsList.findIndex(contacts => contacts.contactId === contact.contactId);
      this.selectedContactsList.splice(currentIndex, 1);
    }
  }

  /**
   * status current
   */
  update(e: any, i: any) {
    this.contacts[i].status = e.target.value;
  }

  /**
   * get Contact Status 
   */
  getContactStatus() {
    let urlStr = 'https://notifier.crm.zlivio.com/contacts/status'
    this.requestService.getContactStatus(urlStr).subscribe((result: any) => {
      this.selectedStatus = result.contact_status;
    })
  }

  syncContact(contactsPayload: any[]) {
    this.requestService.syncContact(ApiUrl.syncContact, contactsPayload).subscribe((res: any) => {
      this.selectedContactsList = [];
      this.toastr.success('Contacts Synced successfully', 'Success');
    }, error => {
      this.toastr.error(`${JSON.stringify(error)}`, 'Warning');
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
