import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigateToDashboard(){
    this.router.navigate(['/zlivio-dashboard']);
  }
}
