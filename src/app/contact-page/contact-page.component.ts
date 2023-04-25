import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  name='';
  email='';
  contactno='';
  message='';
  
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {
  }
  
  
  Contact() {
    var status=confirm("contact sumbitted successfully");
    if(status==true){
      this.router.navigate(['student-login'])
    }
    
  }
  /*contact(){
    if(this.name === '' || this.email === '' || this.contactno === '' || this.message === ''){
      var status = confirm("Please fill all the fields");
    }
    else{
    var status = confirm("Your message was received");
    if(status==true){
      this.router.navigate(['student-login']);
    }
  }
  }*/
  
  }
