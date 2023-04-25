import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentLogoutComponent } from './student-logout/student-logout.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGaurdService } from './auth-gaurd.service';

//Routing path
const routes: Routes = [
  {path: 'students', component: StudentListComponent, canActivate:[AuthGaurdService]},
  {path: 'create-student', component: CreateStudentComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'update-student/:studentId', component: UpdateStudentComponent, canActivate:[AuthGaurdService]},
  {path: 'student-details/:studentId', component: StudentDetailsComponent, canActivate:[AuthGaurdService]},
  {path: 'student-login',component: StudentLoginComponent},
  {path: 'student-logout',component: StudentLogoutComponent, canActivate:[AuthGaurdService]},
  {path: 'feedback-form',component: FeedbackFormComponent},
  {path: 'student-signup',component: StudentSignupComponent},
  {path: 'home-page',component:HomePageComponent },
  {path: 'profile-card',component: ProfileCardComponent},
  {path: 'contact-page',component:ContactPageComponent},
  {path: 'about-page',component: AboutPageComponent},
  {path: 'courses/:lowerGrade', component: CoursesComponent, canActivate:[AuthGaurdService]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
