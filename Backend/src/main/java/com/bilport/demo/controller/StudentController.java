package com.bilport.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bilport.demo.domain.model.Student;
import com.bilport.demo.service.StudentService;

@RestController
@RequestMapping(value = "/students")
public class StudentController {
    
    @Autowired
    StudentService studentService;
    
    @ResponseBody
    @GetMapping(value = "/{name}")
    public Student getStudent(@PathVariable("name") String studentId) {
        return studentService.findById(studentId);
    }
}
