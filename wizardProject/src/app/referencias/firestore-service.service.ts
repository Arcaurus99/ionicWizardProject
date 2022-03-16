import { Injectable, OnInit } from '@angular/core';
import { Referencia } from './referencia.model';

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore"; 

const db = getFirestore();
const collRef = collection(db, "citas");


@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService implements OnInit{

  lista: any = [];
  id_reference_creator = 0;
  data_doc;

  constructor(
  ) { }

  ngOnInit() {  
  }

  async getLastId() {
    let doc_data = null;
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach((doc) => {
      doc_data = doc.data();
      if (this.id_reference_creator < doc_data.idreferencia) {
        this.id_reference_creator = doc_data.idreferencia;
        console.log(this.id_reference_creator);
      }
    });
    
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
      await this.getLastId().then(async () => {
        console.log(this.id_reference_creator + 1);
        try {
          const docAddRef = await addDoc(collection(db, "citas"), {
            idreferencia: this.id_reference_creator + 1,
            titulopub: arg_titulopub,
            autores: arg_autores,
            tipopub: arg_tipopub,
            eventorevista: arg_eventorevista,
            doi: arg_doi,
            anyopub: arg_anyopub,
            photoURL: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80'
          });
          console.log("Document written with ID: ", docAddRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
    }
  
  async deleteDoc(docId) {
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach(async (document) => {
      const doc_data = document.data();
      if (doc_data.idreferencia === Number(docId)) {
        await deleteDoc(doc(db, "citas", document.id))
          .then(() => {
            console.log('reference deleted: ', document.id);
            this.ngOnInit();
          });
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
