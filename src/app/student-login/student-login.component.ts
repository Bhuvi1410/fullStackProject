import { Component, OnInit } from '@angular/core'; 
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false
  emessage= '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['students']);
      console.log("navigate..");
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
      this.emessage='*enter correct credentials';
  }

}