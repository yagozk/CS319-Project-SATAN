package com.bilport.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bilport.demo.domain.model.Supervisor;
import com.bilport.demo.repository.SupervisorRepository;

@Service
public class SupervisorService {
    @Autowired
    SupervisorRepository supervisorRepository;

    public Supervisor findByStudentId(String userName) {
        return supervisorRepository.findById(userName).orElse(null);
    }

    public Supervisor findById(String userName) {
        return supervisorRepository.findById(userName).orElse(null);
    }

    public List<Supervisor> getSupervisors() {
        return supervisorRepository.findAll();
    }

    public void createSupervisor(Supervisor supervisor) {
        supervisorRepository.save(supervisor);
    }

}
