import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit(): void {
  }
  
  
  Feedback() {
    var status=confirm("feedback sumbitted successfully");
    if(status==true){
      this.router.navigate(['students'])
    }
    
  }

}
