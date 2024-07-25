import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { RequestService } from '../service/request.service';
import { ApiUrl } from '../resource-reference';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isSubmitted = false;
  error: boolean = false;

  constructor(
    public router: Router,
    public requestService: RequestService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  submit() {
    this.isSubmitted = true;
    this.error = true;
    this.requestService.login(ApiUrl.login, this.user).subscribe((token) => {
      if (token[0].access_token) {
        sessionStorage.setItem('fuse', token[0].access_token);
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Login Failed', 'Warning');
      }
    }, error => {
      this.toastr.error('Login Failed', 'Warning');
    });
    setTimeout(() => {
      this.error = false;
    }, 3000);
  }

}