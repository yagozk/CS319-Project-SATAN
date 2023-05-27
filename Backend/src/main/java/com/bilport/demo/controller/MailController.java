package com.bilport.demo.controller;


import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailController {
   
    @Autowired
    private JavaMailSender mailSender;

    public MailController(){
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername("SATANYAZILIM@gmail.com");
        mailSender.setPassword("lmohzxngbmzmxyqt");
        
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");
        
        this.mailSender = mailSender;   
    }

    public void sendEmail(String to, String subject, String text) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text, true);

            mailSender.send(message);
            System.out.println("Mail sent hopefully");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    /*
    public void sendMail(){
        MimeMessagePreparator messagePreparator = new MimeMessagePreparator() {
            public void prepare(MimeMessage mimeMessage) throws Exception{
                MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true, "UTF-8");
                message.setFrom("test@mail.com");
                message.setTo("egecenberci@gmail.com");
                message.setSubject("Mail subject");
                message.setText("some text <img src='cid:logo'>", true);
                //message.addInline("logo", new ClassPathResource("img/logo.gif"));
                //message.addAttachment("myDocument.pdf", new ClassPathResource("uploads/document.pdf"));
                
                System.out.println("Mail sent hopefully");
            }
        };
    }
     */
 
}
