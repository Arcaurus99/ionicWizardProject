import { Injectable, OnInit } from '@angular/core';
import { Referencia } from './referencia.model';

import { addDoc, collection, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore"; 

const db = getFirestore();
const collRef = collection(db, "citas");


@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService implements OnInit{

  lista: any = [];
  id_reference_creator;
  data_doc;

  constructor(
  ) { }

  ngOnInit() {  
  }

  async getLastDoc() {
    let doc_data = null;
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach((doc) => {
      doc_data = doc.data()
    });
    this.id_reference_creator = doc_data.idreferencia
    
    // // This query does'n works not idea why
    // const result = await query(collRef, orderBy("eventorevista"), limit(1));
    // console.log(result.converter);
  }

  async getDocById(docId) { // By ID doc
    const docRef = doc(db, "citas", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  getDoc(docId) { // By idreferencia
    this.lista.find(doc => {
      if (doc.idreferencia === docId) {
        this.data_doc = doc
      }
    })
    //console.log(this.data_doc);
    return this.data_doc;
  }

  async getAllDocs() {
    this.lista = [];
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, doc.data());
      this.lista.push(doc.data())
    });
    return this.lista;
  }

  async addDoc(
    arg_titulopub: String,
    arg_autores: String,
    arg_tipopub: Number,
    arg_eventorevista: String,
    arg_doi: String,
    arg_anyopub: Number
    ) {
      try {
        const docAddRef = await addDoc(collection(db, "citas"), {
          idreferencia: this.id_reference_creator + 1,
          titulopub: arg_titulopub,
          autores: arg_autores,
          tipopub: arg_tipopub,
          eventorevista: arg_eventorevista,
          doi: arg_doi,
          anyopub: arg_anyopub
        });
        console.log("Document written with ID: ", docAddRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  
  async deleteDoc(docId) {
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach(async (document) => {
      const doc_data = document.data();
      if (doc_data.idreferencia === Number(docId)) {
        await this.deleteDoc(doc(db, "citas", document.id))
          .then(() => console.log('reference deleted'))
      }
    });
  }

  async updateDoc(
      arg_idreferencia: Number,
      arg_titulopub: String,
      arg_autores: String,
      arg_tipopub: Number,
      arg_eventorevista: String,
      arg_doi: String,
      arg_anyopub: Number
    ) {
      console.log(
        arg_idreferencia,
        arg_titulopub,
        arg_autores,
        arg_tipopub,
        arg_eventorevista,
        arg_doi,
        arg_anyopub
      )
      const querySnapshot = await getDocs(collRef);
      querySnapshot.forEach((document) => {
        const doc_data = document.data();
        if (doc_data.idreferencia === Number(arg_idreferencia)) {
          console.log('update in db...', document.id);
          const docRef = doc(db, "citas", document.id);
          try {
            updateDoc(docRef, {
              titulopub: arg_titulopub,
              autores: arg_autores,
              tipopub: arg_tipopub,
              eventorevista: arg_eventorevista,
              doi: arg_doi,
              anyopub: arg_anyopub
            }).then(() => 
            console.log('success update'));
          } catch (e) {
            console.log('update fail')
          }
        }
      });

    }

}
