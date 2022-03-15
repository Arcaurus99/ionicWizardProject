import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreServiceService } from './firestore-service.service';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.page.html',
  styleUrls: ['./referencias.page.scss'],
})
export class ReferenciasPage implements OnInit {

  data = null;
  doc_data = null;
  lista = [];

  constructor(
    private router: Router, private fireservice:FirestoreServiceService
  ) { }

  async ngOnInit() {
    this.data = this.fireservice.readData();
    //console.log(this.data);
    
    (await this.data).forEach((doc) => {
      this.doc_data = doc.data();
      console.log(doc.id, "=>" , doc.data());
      console.log(this.doc_data.titulopub, this.doc_data.anyopub)

      this.lista.push(doc.data())
    });

    console.log(this.lista)
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }

}
