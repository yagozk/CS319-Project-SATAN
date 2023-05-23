package com.bilport.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bilport.demo.domain.model.Evaluator;
import com.bilport.demo.repository.EvaluatorRepository;

@Service
public class EvaluatorService {
    @Autowired
    EvaluatorRepository evaluatorRepository;

    public Evaluator findById(String userName) {
        return evaluatorRepository.findById(userName).orElse(null);
    }

    public List<Evaluator> getEvaluators() {
        return evaluatorRepository.findAll();
    }

    public void createEvaluator(Evaluator evaluator) {
        evaluatorRepository.save(evaluator);
    }
}
