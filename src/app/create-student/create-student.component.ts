import { Component,OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentName='';
  grade='';
  contactNo='';
  city='';
  gender='';
  dateOfBirth='';

  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }
  
  /*onSubmit() method is to submit student details.*/
  onSubmit(){
    if((this.student.studentName === '') || (this.student.grade < 6) || (this.student.contactNo === '') || (this.student.city==='') || (this.student.gender==='') ||( this.student.dateOfBirth==='')){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status=confirm("Do you want to insert student records?");
    if(status==true){
    var status=confirm("inserted successfully!");
    console.log(this.student);
     this.saveStudent();
     

  }
 
}
  
  }
}


