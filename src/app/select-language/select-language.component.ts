import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  navigateToEnterPhone(){
    this.route.navigate(['/enter-phone']);
  }

}
