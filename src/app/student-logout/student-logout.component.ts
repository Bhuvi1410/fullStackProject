import { Component,OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-logout',
  templateUrl: './student-logout.component.html',
  styleUrls: ['./student-logout.component.css']
})
export class StudentLogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
  
   

   
    var status=confirm("Are you sure want to log out?");
    if(status==true){
      this.authentocationService.logOut();
      this.router.navigate(['login-page']);
    }
    else{
      this.router.navigate(['students']);
    }
    
  
}

}
  

  
 



