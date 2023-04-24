import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  

  studentId: number = 0;
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.studentId = this.route.snapshot.params['studentId'];

    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.studentId, this.student).subscribe( data =>{
      if(this.student.studentName === '' || this.student.grade <6 || this.student.contactNo === '' || this.student.city === '' || this.student.gender === '' || this.student.dateOfBirth === ''){
        var status = confirm("Please fill all the fields");
      }
      else{
        var status = confirm("Your details are updated successfully!");
        this.goToStudentList();
      }
    }
    , error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

  }
