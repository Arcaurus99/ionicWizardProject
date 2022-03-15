import { Injectable } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
let user = auth.currentUser;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AuthService,
  ) { }

  async register(email, password) {
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