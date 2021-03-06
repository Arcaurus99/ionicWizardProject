import { Component, Injector } from '@angular/core';
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
    // private injector: Injector,
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
        //const authService = this.injector.get(AuthService);
        this.authService.register(d_email, d_pws)
          .then(() => this.router.navigate(['/referencias']));
      } else {
        console.log("pas's not match")
      }
    } else {
      console.log('missed values')
    }
  }

}
