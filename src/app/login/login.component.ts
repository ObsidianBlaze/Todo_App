import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails = [
    {username: 'osas', password: '12345'}
  ];
  logMessage: string;

  constructor(private theRouter: Router) {
  }

  ngOnInit(): void {
  }

  loginUser(form: NgForm): void {
    // get the information from the form
    const loginDetails = form.value;
    // check the login details against the details in the database
    for (const element of this.userDetails) {
      if ((element.username === loginDetails.username) && (element.password === loginDetails.pwd)) {
        this.logMessage = 'credentials are correct';
        this.theRouter.navigate(['home']);
        // this.theRouter.navigateByUrl('/');
        break;
      } else {
        this.logMessage = 'Invalid username or password';
      }
    }
    console.log(this.logMessage);

  }

}
