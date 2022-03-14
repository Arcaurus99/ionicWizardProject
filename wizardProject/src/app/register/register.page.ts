import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
