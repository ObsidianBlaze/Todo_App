import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetials = {username: 'James', email: 'jerry@oldman.com'};
  userInfo = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    // get the information from the form
    const registerDetails = form.value;

    this.userInfo.push(registerDetails);

    // Navigating to the homepage after successful registration
    this.router.navigate(['home']);
    console.log(this.userInfo);
  }


}
