import { Component, Injector } from '@angular/core';
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
    private injector: Injector,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['ruslanguns+rusgunx@gmail.com', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(mail, pass) {
    const d_email = mail.value;
    const d_pws = pass.value;
    
    if (d_email && d_pws) {
      console.log('iniciando sesion')
      const authService = this.injector.get(AuthService);
      authService.register(d_email, d_pws);
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
