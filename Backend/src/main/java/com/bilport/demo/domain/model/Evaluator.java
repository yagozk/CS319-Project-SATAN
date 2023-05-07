package com.bilport.demo.domain.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

@Document(collection = "evaluators")
public class Evaluator extends User {
    String evaluatorName;
    String evaluatorSurname;
    String evaluatorEmail;
    
    public Evaluator() {
    }

    public Evaluator(String userName, String userPassword, List<GrantedAuthority> userAuthorities, String evaluatorName, String evaluatorSurname, String evaluatorEmail) {
        super(userName, userPassword, userAuthorities);
        this.evaluatorName = evaluatorName;
        this.evaluatorSurname = evaluatorSurname;
        this.evaluatorEmail = evaluatorEmail;
    }

    public String getEvaluatorName() {
        return evaluatorName;
    }

    public void setEvaluatorName(String name) {
        this.evaluatorName = name;
    }

    public String getEvaluatorSurname() {
        return evaluatorSurname;
    }

    public void setEvaluatorSurname(String surname) {
        this.evaluatorSurname = surname;
    }

    public String getEvaluatorEmail() {
        return evaluatorEmail;
    }

    public void setEvaluatorEmail(String email) {
        this.evaluatorEmail = email;
    }
}
