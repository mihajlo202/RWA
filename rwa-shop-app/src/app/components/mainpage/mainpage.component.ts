import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  displayLogIn:boolean;
  constructor(private router: Router) {
    this.displayLogIn = false;
  }

  ngOnInit(): void {
  }

  showLogInModal(): void {
    this.displayLogIn = true;
  }

  hideLogInModal(): void {
    this.displayLogIn = false;
  }

}
