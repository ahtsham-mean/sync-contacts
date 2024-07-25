import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-zlivio-enter-phone',
  templateUrl: './zlivio-enter-phone.component.html',
  styleUrls: ['./zlivio-enter-phone.component.scss']
})
export class ZlivioEnterPhoneComponent implements OnInit {
  showDailPaid = false;
  number : any;
  display : string = "";
  animation = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
     this.animate(); 
    }, 100);
    
  }

  animate(){
    this.animation = false;
  }
  numBtn(val:any){
      if (this.display == '') {
        this.display = val.toString();
      } else {
        this.display = `${this.display}${val}`;
    }
  }

    openDropdown(){
      this.showDailPaid = !this.showDailPaid;
    }



    navigateToLoginDashboard(){
      this.router.navigate(['/login-design']);
    }
    clsBtn(){
      if(this.display != ""){
        this.display = this.display.substr(0, this.display.length - 1)
      }
    }
    
}
