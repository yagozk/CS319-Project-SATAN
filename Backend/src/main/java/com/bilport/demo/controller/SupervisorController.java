package com.bilport.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bilport.demo.domain.model.Supervisor;
import com.bilport.demo.repository.SupervisorRepository;
import com.bilport.demo.service.SupervisorService;

@RestController
@RequestMapping(value = "/supervisors")
public class SupervisorController {

    @Autowired
    SupervisorService supervisorService;

    @ResponseBody
    @GetMapping(value = "/{id}")
    public Supervisor getSupervisorOfStudent(@PathVariable("id") String id) {
        System.out.println("\nHeyy|n");
        return supervisorService.findById(id);
    }

    @PostMapping(value = "/{id}")
    public ResponseEntity<String> uploadSupervisorInfo(@PathVariable("id") String id,
            @RequestBody Supervisor supervisor) {
        try {
            supervisorService.createSupervisor(supervisor);

            return new ResponseEntity<String>("Success Upload", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<String>("Fail Upload", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
