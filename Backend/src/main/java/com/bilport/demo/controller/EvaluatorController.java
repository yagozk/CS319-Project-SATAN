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

import com.bilport.demo.domain.dto.StudentResponse;
import com.bilport.demo.domain.dto.SubmissionResponse;
import com.bilport.demo.domain.model.Evaluator;
import com.bilport.demo.domain.model.Report;
import com.bilport.demo.service.EvaluatorService;

@RestController
@RequestMapping(value = "/evaluators")
public class EvaluatorController {
    @Autowired
    EvaluatorService evaluatorService;

    @ResponseBody
    @GetMapping(value = "/{id}")
    public Evaluator getEvaluator(@PathVariable("id") String id) {
        return evaluatorService.findById(id);
    }

    @ResponseBody
    @GetMapping(value = "/students/{id}")
    public List<StudentResponse> getAssignedStudents(@PathVariable("id") String id) {
        return evaluatorService.getAssignedStudents(id);
    }

    @ResponseBody
    @GetMapping(value = "/reports/{id}")
    public List<Report> getAssignedReports(@PathVariable("id") String id) {
        return evaluatorService.getAssignedReports(id);
    }

    @ResponseBody
    @GetMapping
    public List<Evaluator> getEvaluators() {
        return evaluatorService.getEvaluators();
    }
    
    @ResponseBody
    @GetMapping(value = "/submissions/{id}")
    public List<SubmissionResponse> getSubmissions(@PathVariable("id") String id) {
        return evaluatorService.getSubmissions(id);
    }


}
