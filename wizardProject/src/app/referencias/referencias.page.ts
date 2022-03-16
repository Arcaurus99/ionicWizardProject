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

  constructor(
    private router: Router, 
    private fireService: FirestoreServiceService
  ) { }

  async ngOnInit() {
    this.coll_data = await this.fireService.getAllDocs();
    console.log(this.coll_data)
  }

  addNew() {}

  getLast() {
    this.fireService.getLastDoc();
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }

}
