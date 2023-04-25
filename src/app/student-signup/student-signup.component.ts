import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  username='';
  password='';
  confirmpassword='';
 
    constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit(): void {
  }
  
  
  Register() {

    if(this.username === '' || this.password === '' || this.confirmpassword === ''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Registered Successfully");
    if(status==true){
      this.router.navigate(['student-login']);
    }
    }
    }
    
    }



