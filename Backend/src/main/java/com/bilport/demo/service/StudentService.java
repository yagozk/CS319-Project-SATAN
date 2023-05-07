package com.bilport.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bilport.demo.domain.model.Student;
import com.bilport.demo.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public Student findById(String userName) {
        return studentRepository.findById(userName).orElse(null);
    }

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public void createStudent(Student student) {
        studentRepository.save(student);
    }
}
