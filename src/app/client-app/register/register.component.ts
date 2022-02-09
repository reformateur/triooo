import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //ON INIT STATE
    $('#bi-eye').css( "display", "none");
    $('#bi-eye-slash-signup').css( "display", "none");
    $('#bi-eye-signup').css( "display", "none");
    $('#bi-eye-slash-signup-confirm').css( "display", "none");
    $('#bi-eye-signup-confirm').css( "display", "none");

    //LOGIN FORM CODE
    $("#bi-eye-slash").on('click', function(event) {
        event.preventDefault();
        $('#bi-eye-slash').css( "display", "none");
        $('#bi-eye').css( "display", "block");
        $('#show_hide_password input').attr('type', 'text');
        $('#bi-eye-slash-signup').css( "display", "none");
        $('#bi-eye-signup').css( "display", "none");
        $('#bi-eye-slash-signup-confirm').css( "display", "none");
        $('#bi-eye-signup-confirm').css( "display", "none");
    });
    $("#bi-eye").on('click', function(event) {
        event.preventDefault();
        $('#bi-eye').css( "display", "none");
        $('#bi-eye-slash').css( "display", "block");
        $('#show_hide_password input').attr('type', 'password');
        $('#bi-eye-slash-signup').css( "display", "none");
        $('#bi-eye-signup').css( "display", "none");
        $('#bi-eye-slash-signup-confirm').css( "display", "none");
        $('#bi-eye-signup-confirm').css( "display", "none");
    });
    $(".btn-login").on('click', function() {
        $('.btn-login').css( "display", "none");
        $('.form-bloc-right').css( "margin-top", "");
        $('.btn-authentification').css( "margin-top", "");
        $('.signupForm').css( "display", "none");
        $('.btn-signup').css( "display", "block");
        $('.loginForm').css( "display", "block");
        $('.txt-signup').css( "visibility", "visible");
        $('#bi-eye-slash').css( "display", "block");
        $('#bi-eye-signup').css( "display", "none");
        $('#bi-eye').css( "display", "none");
        $('#show_hide_password_signup input').attr('type', 'password');
    });



    //SIGNUP FORM CODE
    $(".btn-signup").on('click', function() {
        $('.btn-signup').css( "display", "none");
        $('.loginForm').css( "display", "none");
        $('.txt-signup').css( "visibility", "hidden");
        $('.form-bloc-right').css( "margin-top", "-5vh");
        $('.btn-authentification').css( "margin-top", "20px");
        $('.signupForm').css( "display", "block");
        $('.btn-login').css( "display", "block");
        $('#bi-eye-slash-signup').css( "display", "block");
        $('#bi-eye-slash-signup-confirm').css( "display", "none");
        $('#bi-eye').css( "display", "none");
    });
    $("#bi-eye-slash-signup").on('click', function(event) {
        event.preventDefault();
        $('#bi-eye-slash-signup').css( "display", "none");
        $('#bi-eye-signup').css( "display", "block");
        $('#show_hide_password_signup input').attr('type', 'text');
        $('#bi-eye').css( "display", "none");
        $('#bi-eye-slash').css( "display", "none");
    });
    $("#bi-eye-signup").on('click', function(event) {
        event.preventDefault();
        $('#bi-eye-signup').css( "display", "none");
        $('#bi-eye-slash-signup').css( "display", "block");
        $('#show_hide_password_signup input').attr('type', 'password');
        $('#bi-eye').css( "display", "none");
        $('#bi-eye-slash').css( "display", "none");
    });

    $("#show_hide_password_signup_confirm .form-control").on('focusin', function(event) {
      $('#bi-eye-slash-signup-confirm').css( "display", "block");
      $('#bi-eye-signup-confirm').css( "display", "none");
      $('#show_hide_password_signup_confirm input').attr('type', 'password');
    });
    $("#bi-eye-slash-signup-confirm").on('click', function(event) {
      $('#bi-eye-slash-signup-confirm').css( "display", "none");
      $('#bi-eye-signup-confirm').css( "display", "block");
      $('#show_hide_password_signup_confirm input').attr('type', 'text');
    });
    $("#bi-eye-signup-confirm").on('click', function(event) {
      $('#bi-eye-slash-signup-confirm').css( "display", "block");
      $('#bi-eye-signup-confirm').css( "display", "none");
      $('#show_hide_password_signup_confirm input').attr('type', 'password');
    });

  }

}
