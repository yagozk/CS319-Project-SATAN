package com.bilport.demo.service;

import com.bilport.demo.domain.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    //private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private UserService repo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        
        User user;
        org.springframework.security.core.userdetails.User springUser = null;

        user = repo.findByUserName(userName);

        if (user != null) {
            springUser = new org.springframework.security.core.userdetails.User(
                    user.getUserName(),
                    user.getUserPassword(),
                    user.getUserAuthorities());
            return springUser;
        } else {
            //throw new UsernameNotFoundException(String.format("Username not found"));
            return null;
        }
        //return null;
    }
}