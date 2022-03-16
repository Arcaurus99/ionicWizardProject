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

  recipeId;
  referencia;

  constructor(
    private activateRouter: ActivatedRoute,
    private fireService: FirestoreServiceService
  ) { }

  async ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap => {
      //if (!paramMap) {} //redirect
      this.recipeId = paramMap.get('refId');
    })
    this.referencia = await this.fireService.getDoc(Number(this.recipeId))
      .then(() => console.log(this.referencia));
  }

}
