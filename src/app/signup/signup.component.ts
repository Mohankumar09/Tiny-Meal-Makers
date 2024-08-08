import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignup() {
    // Add your sign-up logic here. For example, you can call a user service to create a new account.
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }
}
