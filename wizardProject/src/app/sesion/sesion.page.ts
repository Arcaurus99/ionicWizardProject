import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage{

  form: FormGroup;

  constructor(
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
      console.log('registrando')
      signInWithEmailAndPassword(auth, d_email, d_pws)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          this.router.navigate(['/referencias']);
          console.log('data sended');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('register problem');
        });
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
