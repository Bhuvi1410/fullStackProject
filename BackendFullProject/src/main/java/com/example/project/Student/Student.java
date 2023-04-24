package com.example.project.Student;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "Students")
@DynamicUpdate
/* It is a blueprint. Here we use public getter and setter methods for private attributes.
 * In this class we use @Entity and @Table. 
 * @Entity is used so that the class name will be table name in db.
 * For avoid to write query, we go for hibernate
 * @Dynamic update annotation is used for update values instead of checking all values in that record.  
 * It will check only which value will be updated*/
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer studentId;
	
	@Column(name = "Name", nullable = false)
	private String studentName; //student_name
	
	private int grade;
	private long contactNo;
	private String city;
	private String gender;
	private String dateOfBirth;
	
	public Student() {}
	
	public Student(Integer studentId,String studentName, String standard , long contactNo) {
		super();
		this.studentId=studentId;
		this.studentName= studentName;
		this.grade= grade;
		this.contactNo = contactNo;
	}
	//getter and setter method for private attributes
	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	
	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
}
