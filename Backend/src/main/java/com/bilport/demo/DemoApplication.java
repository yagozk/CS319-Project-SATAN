package com.bilport.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;

import com.bilport.demo.controller.MailController;
import org.springframework.context.event.EventListener;
import org.springframework.boot.context.event.ApplicationReadyEvent;


@SpringBootApplication
public class DemoApplication {

	@Autowired
	private  MailController mailer;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		
		
	}
	/*
	@EventListener(ApplicationReadyEvent.class)
	public void sendMail(){
		mailer.sendEmail("egecenberci@gmail.com","Test subject","Test body");
		
	}
	*/
}
