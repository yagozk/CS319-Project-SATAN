package com.bilport.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bilport.demo.domain.dto.StudentResponse;
import com.bilport.demo.domain.model.Student;
import com.bilport.demo.service.StudentService;

@RestController
@RequestMapping(value = "/students")
public class StudentController {
    
    @Autowired
    StudentService studentService;
    
    @ResponseBody
    @GetMapping(value = "/{name}")
    public ResponseEntity<StudentResponse> getStudent(@PathVariable("name") String studentId) {
        try {
            StudentResponse studentResponse = new StudentResponse();
            Student studentModel = studentService.findById(studentId);

            studentResponse.setStudentName(studentModel.getStudentName());
            studentResponse.setStudentSurname(studentModel.getStudentSurname());
            studentResponse.setStudentEmail(studentModel.getStudentEmail());
            studentResponse.setAssignedEvaluatorId(studentModel.getAssignedEvaluatorId());
            studentResponse.setAssignedTaId(studentModel.getAssignedTaId());
            studentResponse.setAssignedSupervisorId(studentModel.getAssignedSupervisorId());


            return new ResponseEntity<StudentResponse>(studentResponse, HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<StudentResponse>(new StudentResponse(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
