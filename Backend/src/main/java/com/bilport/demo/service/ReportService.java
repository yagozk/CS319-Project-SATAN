package com.bilport.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bilport.demo.domain.model.Report;
import com.bilport.demo.domain.model.ReportFile;
import com.bilport.demo.domain.model.Student;
import com.bilport.demo.repository.ReportFileRepository;
import com.bilport.demo.repository.ReportRepository;
import com.bilport.demo.repository.StudentRepository;

@Service
public class ReportService {

    @Autowired
    ReportRepository reportRepository;

    @Autowired
    ReportFileRepository reportFileRepository;

    @Autowired
    StudentRepository studentRepository;

    public List<Report> getReports() {
        return reportRepository.findAll();
    }

    public Report findByReportId(String reportId) {
        return reportRepository.findById(reportId).orElse(null);
    }

    public Report findByReportOwnerAndVersion(String reportOwner, int version) {
        return reportRepository.findByReportOwnerAndVersion(reportOwner, version).orElse(null);
    }

    public void uploadStudentReport(Report report) {
        reportRepository.save(report);

        incrementReportVersion(report.reportOwner, report.course);
    }

    public void incrementReportVersion(String studentId, String course) {
        Student student = studentRepository.findById(studentId).orElse(null);
        
        if (course.equals("CS299")) {
            student.setReportVersionCS299(student.getReportVersionCS299() + 1);
        } else if (course.equals("CS399")) {
            student.setReportVersionCS399(student.getReportVersionCS399() + 1);
            System.out.println("KELLER");

        }

        System.out.println("INCCC" + student.getReportVersionCS299() + " " + student.getReportVersionCS399() + course);
        studentRepository.save(student);
    }

    public void uploadFileToReport(MultipartFile reportFile, String name) {
            try {
                reportFileRepository.save(new ReportFile(name, reportFile.getBytes(), reportFile.getContentType()));
            } catch (IOException e) {
                e.printStackTrace();
            }
    }

    public byte[] downloadReportFile(String reportId) {
        try {
            return reportFileRepository.findById(reportId).get().getReportFile();
        } catch (Exception e) {
            return null;
        }
    }

    public List<Report> findByReportOwner(String username) {
        try {
            return reportRepository.findByReportOwner(username).orElse(null);
        } catch (Exception e) {
            return null;
        }
    }
}
