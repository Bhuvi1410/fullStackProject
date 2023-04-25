import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentLogoutComponent } from './student-logout/student-logout.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    StudentLoginComponent,
    FeedbackFormComponent,
    StudentSignupComponent,
    StudentLogoutComponent,
    ProfileCardComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    CoursesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
