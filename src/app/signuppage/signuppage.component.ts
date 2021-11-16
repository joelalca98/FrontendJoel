import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css'],
})
export class SignuppageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  signUpForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
    confirmationPassword: this.fb.control('', [Validators.required]),
  });

  passwordsMissmatch() {
    if(this.signUpForm.controls.password.value === this.signUpForm.controls.confirmationPassword.value) return false;  
    return true; 
  }
}
