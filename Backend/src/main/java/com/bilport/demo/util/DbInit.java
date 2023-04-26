// package com.bilport.demo.util;
// import com.bilport.demo.domain.model.Report;
// import com.bilport.demo.repository.ReportRepository;

// import org.springframework.boot.CommandLineRunner;
// import org.springframework.stereotype.Component;

// @Component
// public class DbInit implements CommandLineRunner {

//     private final ReportRepository repository;

//     public DbInit(ReportRepository repository) {
//         this.repository = repository;
//     }

//     @Override
//     public void run(String... args) throws Exception {
//         repository.save(new Report("heee5e", "adminBoy"));
//         repository.save(new Report("rree4t46ff", "adminBoy"));
//     }

//     // @Override
//     // public void run(String... args) throws Exception {
//     //     repository.save(new User("adminBoy", "pass1", getAuthorities(new ArrayList<String>( Arrays.asList( new String[]{"ROLE_ADMIN"})))));
//     //     repository.save(new User("userBoy", "pass2", getAuthorities(new ArrayList<String>( Arrays.asList( new String[]{"ROLE_USER"})))));
//     // }

//     // private List<GrantedAuthority> getAuthorities(List<String> roles) {
        
//     //     List<GrantedAuthority> authorities = new ArrayList<>();
//     //     roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));
//     //     return authorities;

//     // }
// }
