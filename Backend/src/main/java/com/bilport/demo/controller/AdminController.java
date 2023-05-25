package com.bilport.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bilport.demo.domain.model.Admin;
import com.bilport.demo.domain.model.Evaluator;
import com.bilport.demo.domain.model.Student;
import com.bilport.demo.domain.model.TA;
import com.bilport.demo.service.AdminService;
import com.bilport.demo.service.StudentService;
import com.bilport.demo.service.TAService;
import com.bilport.demo.service.EvaluatorService;

@RestController
@RequestMapping(value = "/admins")
public class AdminController {
    @Autowired
    AdminService adminService;
    StudentService studentService;
    TAService taService;
    EvaluatorService evaluatorService;

    @ResponseBody
    @GetMapping(value = "/{id}")
    public Admin getadmin(@PathVariable("id") String id) {
        return adminService.findById(id);
    }

    // @GetMapping(value = "/{id}")
    // public List<Student> getAllStudents(@PathVariable("id") String id) {
    public List<Student> getAllStudents() {
        return studentService.getStudents();
    }

    // public List<TA> getAllTAs(@PathVariable("id") String id) {
    public List<TA> getAllTAs() {
        return taService.getTAs();
    }

    // public List<Evaluator> getAllTAs(@PathVariable("id") String id) {
    public List<Evaluator> getAllEvaluators() {
        return evaluatorService.getEvaluators();
    }
}
