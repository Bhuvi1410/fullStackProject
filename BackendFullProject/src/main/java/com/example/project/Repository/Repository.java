package com.example.project.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.project.Student.Student;

@org.springframework.stereotype.Repository
/* this Interface extends JpaRepository interface,so that
 * @Repository is not be annotated manually
 */
public interface Repository extends JpaRepository<Student, Integer>{
	List<Student> findByStudentNameContaining(String studentName);
	List<Student> findByGrade(int grade);
	

}
