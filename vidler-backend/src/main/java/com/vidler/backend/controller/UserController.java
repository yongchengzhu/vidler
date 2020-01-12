package com.vidler.backend.controller;

import com.vidler.backend.security.CurrentUser;
import com.vidler.backend.security.UserPrincipal;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

  @GetMapping("/user/me")
  @PreAuthorize("hasRole('USER')")
  public UserPrincipal getCurrentUser(@CurrentUser UserPrincipal currentUser) {
    return currentUser;
  }
}