import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model = {
    username: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Your registration logic here
      console.log('Registration successful', this.model);
    }
  }
}
