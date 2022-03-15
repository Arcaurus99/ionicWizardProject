import { Component } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  ValidationErrors, 
  ValidatorFn, 
  Validators 
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';

const checkPasswords: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  console.log(group.get('password').value, group.get('confirmPassword').value);
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : { notEqual: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage{

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      // email: ['', [Validators.email, Validators.required]],
      // password: ['', [Validators.required]],
      // confirmPassword: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    },
    //{ validators: checkPasswords }
    );
    console.log(this.email.value)
    console.log(this.password.value)
    console.log(this.confirmPassword.value)
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

  register(mail, pass, cpass) {
    const d_email = mail.value;
    const d_pws = pass.value;
    const d_cpws = cpass.value;
    
    if (d_email && d_pws && d_cpws) {
      if (d_pws == d_cpws) {
        console.log('registrando');
        this.authService.register(d_email, d_pws);
        this.router.navigate(['/referencias']);
      } else {
        console.log("pas's not match")
      }
    } else {
      console.log('missed values')
    }
    }

  onSubmit() {
    console.log('Clicked! Validation:', this.form.valid)
    if (this.form.valid) {
      const { email, password } = this.form.value;
      console.log('Registered:', email, ' - ', password);
    }
    
    console.log(this.email.value, this.password.value, this.confirmPassword.value)
    console.log(this.form.get('email'), this.form.get('password'), this.form.get('confirmPassword'));
    // if (this.password.value == this.confirmPassword.value) {
    //   createUserWithEmailAndPassword(auth, this.email.value, this.password.value)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       this.router.navigate(['/referencias']);
    //       console.log('data sended');
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log('register problem');
    //     });
    // }

  }

}
