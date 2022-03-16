import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { on } from 'events';
import { FirestoreServiceService } from '../firestore-service.service';
import { Referencia } from '../referencia.model';

@Component({
  selector: 'app-referencias-detail',
  templateUrl: './referencias-detail.page.html',
  styleUrls: ['./referencias-detail.page.scss'],
})
export class ReferenciasDetailPage implements OnInit {

  ref: Referencia;
  recipeId: any;
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
    this.ref = this.fireService.getDoc(Number(this.recipeId));
    console.log(this.ref);
  }

  edit() {
    this.ifEdit = true;
  }

  save(
    arg_titulopub,
    arg_autores,
    arg_tipopub,
    arg_eventorevista,
    arg_doi,
    arg_anyopub
  ) {
      try {
        this.fireService.updateDoc(
          this.recipeId,
          arg_titulopub.value,
          arg_autores.value,
          arg_tipopub.value,
          arg_eventorevista.value,
          arg_doi.value,
          arg_anyopub.value
        ).then(async () => { 
            await this.fireService.getAllDocs().then(() => {
              this.ngOnInit()
              this.ifEdit = false;
            })
            console.log('data sent');
          });
      } catch (e) {
        console.log('data send error')
      }
    }

  delete() {
    
  }
  
}
