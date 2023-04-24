import { Component,OnInit } from '@angular/core';
import { Student} from '../student'
import { StudentService } from '../student.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  firstName : String = '';
  studentFoundBySearch : Student[] = [];
  gradeValue: number=0;
  

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;

      
    });
  }
  //To view particular student details by id.

  studentDetails(studentId: number){
    this.router.navigate(['student-details', studentId]);
  }
  //To update student details by id

  updateStudent(studentId: number){
    this.router.navigate(['update-student', studentId]);
  }
  //To delete particular student details by id

  deleteStudent(studentId: number){
    this.studentService.deleteStudent(studentId).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
    
        
  }
  //confirmDelete() will give the alert message to delete record
  confirmDelete(student : Student){
    var status= confirm("You want to delete this record?");
     if (status==true) {
       this.deleteStudent(student.studentId);
          }
     else{
      this.getStudents();
     }
  }
  //confirmUpdate() will give the alert message to update record
  confirmUpdate(student : Student){
    var status= confirm("do you want to update this record?");
     if (status==true) {
       this.updateStudent(student.studentId);
          }
     else{
      this.getStudents();
     }
  }
  // removeAllStudents() will give the alert message to remove all record from the student list
  removeAllStudents(): void{
    var status=confirm("be aware of this will remove all the records from list!! Do you really want to remove all records?");
    if(status==true){
    this.studentService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.getStudents();
      },
      error => {
        console.log(error);
      }
    );
    }}
 
// searchByName() will give the alert message to search a student record
  searchByName(){
    this.studentService.findByName(this.firstName).subscribe( data => {
      this.students= data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

  }
  //fetchByGrade() give student records from particular grade
  fetchByGrade(grade: any){
    this.gradeValue=grade.target.value;
    console.log(this.gradeValue);
    this.studentService.findByGrade(this.gradeValue).subscribe(data => {
      this.students = data;
      console.log(data);
      },
    error => {
      console.log(error);
    });

  }
// viewCourse() it offer what courses are available for that student according to standard
  viewCourse(student: Student){
    console.log(student.grade);
    console.log(student.isLowerGrade);
    if(student.grade>=6 && student.grade<=10) {
      student.isLowerGrade = true;
      console.log('studentComponent if condition '+student.isLowerGrade);
      this.router.navigate(['courses',true]);
    }
    else{
      student.isLowerGrade = false;
      console.log("studentComponent else condition "+student.isLowerGrade);
      this.router.navigate(['courses',false]);
    }
  }
  


  
  

}


