package com.bilport.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserController {

    // @Autowired
    // private UserService repo; 

    @GetMapping(value = "/items")
    public ResponseEntity<String> getAllUsers() {

        try {
            return new ResponseEntity<>("ddddd", HttpStatus.OK);    

        } catch (Exception ex) {
            return new ResponseEntity<>("aaassssdd", HttpStatus.UNAUTHORIZED);
        }
    }

}