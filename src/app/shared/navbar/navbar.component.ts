import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  navOpen() {
    this.navToggle.emit(true);
  }

  ngOnInit(): void {
  }

}
