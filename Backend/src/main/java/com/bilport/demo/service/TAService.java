package com.bilport.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bilport.demo.domain.model.TA;
import com.bilport.demo.repository.TARepository;

@Service
public class TAService {
    @Autowired
    TARepository taRepository;

    public TA findById(String userName) {
        return taRepository.findById(userName).orElse(null);
    }

    public List<TA> getTAs() {
        return taRepository.findAll();
    }

    public void createTA(TA ta) {
        taRepository.save(ta);
    }
}
