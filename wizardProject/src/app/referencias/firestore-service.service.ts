import { Injectable } from '@angular/core';

import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"; 

const db = getFirestore();


const docRef = doc(db, "citas", "crud");


@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor() { }

  async readADoc() {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  async readData() {
    const querySnapshot = await getDocs(collection(db, "citas"));

    return querySnapshot;
  }

}
