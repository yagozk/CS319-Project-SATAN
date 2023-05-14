package com.bilport.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bilport.demo.domain.model.Report;
import com.bilport.demo.domain.model.ReportFile;
import com.bilport.demo.repository.ReportFileRepository;
import com.bilport.demo.repository.ReportRepository;

@Service
public class ReportService {

    @Autowired
    ReportRepository reportRepository;

    @Autowired
    ReportFileRepository reportFileRepository;

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
