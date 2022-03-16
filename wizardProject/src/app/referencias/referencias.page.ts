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

  constructor(
    private router: Router, 
    private fireService: FirestoreServiceService
  ) { }

  async ngOnInit() {
    this.data = await this.fireService.getDocs();
    console.log(this.data)
  }

  addNew() {}

  getLast() {
    this.fireService.getLastDoc();
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }

}
