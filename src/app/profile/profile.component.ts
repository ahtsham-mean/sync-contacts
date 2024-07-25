import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  panelColor = 'red'
  name = "VIP"
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard() {
    this.router.navigate(['/zlivio-dashboard']);
  }
  
  btnName() {
    if (this.name == 'VIP') {
      this.name = 'PRUEBA';
    } else if (this.name == 'PRUEBA') {
      this.name = 'BUSINESS';
    }
    else if (this.name == 'BUSINESS') {
      this.name = 'VIP';
    }
  }
}
