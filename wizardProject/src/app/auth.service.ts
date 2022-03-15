import { Injectable } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = this.auth.authState;

  constructor(
    private auth: AuthService,
  ) { }

  async authRegister(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;
      console.log('data sended');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('register problem');
    });
  }
}
