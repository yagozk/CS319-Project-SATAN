package com.bilport.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bilport.demo.domain.model.Report;
import com.bilport.demo.service.ReportService;

@RestController
@RequestMapping(value = "/reports")
public class ReportController {

    @Autowired
    ReportService reportService;

    @ResponseBody
    @GetMapping(value = "/{name}")
    public List<Report> getReportsOfStudent(@PathVariable("name") String name) {
        return reportService.findByReportOwner(name);
    }

    @PostMapping(value = "/{name}")
    public ResponseEntity<String> uploadStudentReport(@PathVariable("name") String name, @RequestBody Report report) {
        try {

            reportService.uploadStudentReport(report);

            return new ResponseEntity<String>("Success Upload", HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<String>("Fail Upload", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
