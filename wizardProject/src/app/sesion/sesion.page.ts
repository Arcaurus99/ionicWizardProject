import { Component, Injector } from '@angular/core';    // Injector Import 
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
    // private injector: Injector,    # Injector Constructor
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
      //const authService = this.injector.get<AuthService>(AuthService);    # Get Authservice by Injection
      this.authService.login(d_email, d_pws)
        //.then(() => this.router.navigate(['/referencias']));
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
