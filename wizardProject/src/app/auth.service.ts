import { Injectable } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();
let user = auth.currentUser;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        console.log('data sended');
        // console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('sesion problem');
      });
  }

  async register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        console.log('data sended');
        // console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('register problem');
      });
  }

  async logout() {
    if (user !== null) {
      signOut(auth).then(() => {
        console.log('logout success')
      }).catch((error) => {
        console.log('logout error')
      });
    }
  }

  async getUser() {
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      console.log(displayName, email, photoURL, emailVerified)

      return user
    } else {
      console.log('no user loged')
    }
  }

}
