package com.bilport.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bilport.demo.domain.model.Admin;
import com.bilport.demo.repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public Admin findById(String userName) {
        return adminRepository.findById(userName).orElse(null);
    }

    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    public void createAdmin(Admin admin) {
        adminRepository.save(admin);
    }
}
