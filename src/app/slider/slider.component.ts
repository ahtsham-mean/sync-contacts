import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';
import { event } from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  access: boolean = false;
  count = 0;
  isHide = false;
  hideDash = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate() {
    this.count++;
    if (this.count == 2) {
      this.isHide = true;
    } else if(this.count == 3){
      this.hideDash = true;
    } if (this.count == 4) {
      this.count = 0;
    }
  }
  previous(ev:any) {
    console.log(ev);
    
    this.count--;
  }

  async getPermission(event) {
    const res: any = await Contacts.getPermissions();
    if (res.granted == true || res.contacts == 'granted') {
      this.isHide = event;
    }
  }
  accessContact(val){  
    this.isHide = val;

  }
}
