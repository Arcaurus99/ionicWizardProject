import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth();

const checkPasswords: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : { notEqual: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['ruslanguns+rusgunx@gmail.com', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
    },
    { validators: checkPasswords }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          this.router.navigate(['/referencias'])
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

}
