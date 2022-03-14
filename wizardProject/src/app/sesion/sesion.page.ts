import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

    }
  }

}
