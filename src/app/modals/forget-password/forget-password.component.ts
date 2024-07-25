import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare let Email: any;
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
gmailId: string = 'umairtesting1@gmail.com';
phoneNumber = '25327638729379';
  constructor(private router: Router,   private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  sendEmail(){
  if(this.gmailId){
    this.toastr.warning('Email sent Successfully');
  }
   
  }
  
  sendNumber(){
   if(this.phoneNumber){
    this.toastr.warning('SMS sent Successfully');
   }
  }

  navigateToEnterPhone(){
    this.router.navigate(['/enter-phone']);
  }
}
