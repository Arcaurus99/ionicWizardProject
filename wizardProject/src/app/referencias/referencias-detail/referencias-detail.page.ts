import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreServiceService } from '../firestore-service.service';
import { Referencia } from '../referencia.model';

@Component({
  selector: 'app-referencias-detail',
  templateUrl: './referencias-detail.page.html',
  styleUrls: ['./referencias-detail.page.scss'],
})
export class ReferenciasDetailPage implements OnInit {

  referencia: Referencia;
  recipeId;
  ifEdit = false;

  constructor(
    private activateRouter: ActivatedRoute,
    private fireService: FirestoreServiceService
  ) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap => {
      //if (!paramMap) {} //redirect
      this.recipeId = paramMap.get('refId');
    })
    this.referencia = this.fireService.getDoc(Number(this.recipeId));
    console.log(this.referencia);
  }

  edit() {
    this.ifEdit = true;
  }

}
