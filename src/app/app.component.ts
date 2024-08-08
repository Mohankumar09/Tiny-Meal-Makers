import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faBox, faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiny-meal-makers';

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }
  faHome = faHome;
faBox = faBox;
faHistory = faHistory;
}

