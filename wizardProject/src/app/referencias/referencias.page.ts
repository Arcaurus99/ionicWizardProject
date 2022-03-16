import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreServiceService } from './firestore-service.service';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.page.html',
  styleUrls: ['./referencias.page.scss'],
})
export class ReferenciasPage implements OnInit {

  coll_data = [];
  ifUpdate = false;

  constructor(
    private router: Router, 
    private fireService: FirestoreServiceService
  ) { }

  async ngOnInit() {
    this.ifUpdate = false;
    this.fireService.getLastId();
  }

  async ionViewWillEnter() {
    this.coll_data = await this.fireService.getAllDocs();
    console.log(this.coll_data);
  }

  addNew() {
    this.router.navigate(['/new-referencia'])
  }

  ref() {
    this.ifUpdate = true
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }

}
