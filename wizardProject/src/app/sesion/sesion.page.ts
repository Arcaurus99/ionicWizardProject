import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage{

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['ruslanguns+rusgunx@gmail.com', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  sesion(mail, pass) {
    const d_email = mail.value;
    const d_pws = pass.value;
    
    if (d_email && d_pws) {
      console.log('iniciando sesion')
      // this.authService.login(d_email, d_pws)
      //   .then(() => this.router.navigate(['/referencias']));
    } else {
      console.log('missed values')
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      console.log('Loged:', email, ' - ', password);
    }
  }

}
