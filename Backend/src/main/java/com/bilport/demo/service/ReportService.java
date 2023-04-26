package com.bilport.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bilport.demo.domain.model.Report;
import com.bilport.demo.repository.ReportRepository;

@Service
public class ReportService {
    
    @Autowired
    ReportRepository reportRepository;

    public List<Report> getReports() {
        return reportRepository.findAll();
    }

    public Report findByReportId(String reportId) {
        return reportRepository.findById(reportId).orElse(null);
    }

    public void uploadStudentReport(Report report) {
        reportRepository.save(report);
    }

    public List<Report> findByReportOwner(String username) {
        try {
            return reportRepository.findByReportOwner(username).orElse(null);
        } catch (Exception e) {
            return null;
        }
    }
}
