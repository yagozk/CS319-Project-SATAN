package com.bilport.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bilport.demo.domain.model.Evaluator;
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
}
