// package com.bilport.demo.util;
// import com.bilport.demo.domain.model.Report;
// import com.bilport.demo.domain.model.Student;
// import com.bilport.demo.domain.model.User;
// import com.bilport.demo.repository.ReportRepository;
// import com.bilport.demo.repository.StudentRepository;
// import com.bilport.demo.repository.UserRepository;

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.List;

// import org.springframework.boot.CommandLineRunner;
// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.stereotype.Component;

// @Component
// public class DbInit implements CommandLineRunner {

//     private final StudentRepository repository;

//     public DbInit(StudentRepository repository) {
//         this.repository = repository;
//     }

//     // @Override
//     // public void run(String... args) throws Exception {
//     //     repository.save(new Report("heee5e", "adminBoy"));
//     //     repository.save(new Report("rree4t46ff", "adminBoy"));
//     // }

//     // @Override
//     // public void run(String... args) throws Exception {
//     //     repository.save(new User("adminBoy", "pass1", getAuthorities(new ArrayList<String>( Arrays.asList( new String[]{"ROLE_ADMIN"})))));
//     //     repository.save(new User("userBoy", "pass2", getAuthorities(new ArrayList<String>( Arrays.asList( new String[]{"ROLE_USER"})))));
//     // }

//     @Override
//     public void run(String... args) throws Exception {
//         repository.save(new Student("22003131", "pass1", getAuthorities(new ArrayList<String>( Arrays.asList( new String[]{"ROLE_USER"})))
//         , "Haktan", "Götten", "gotten@mail.com", "SiktenEvaluator", "SiktenTa", "SiktenSupervisor"));
//         }

//     private List<GrantedAuthority> getAuthorities(List<String> roles) {
        
//         List<GrantedAuthority> authorities = new ArrayList<>();
//         roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));
//         return authorities;

//     }
// }
