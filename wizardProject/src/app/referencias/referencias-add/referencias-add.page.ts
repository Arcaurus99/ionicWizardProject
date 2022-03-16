import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreServiceService } from '../firestore-service.service';

@Component({
  selector: 'app-referencias-add',
  templateUrl: './referencias-add.page.html',
  styleUrls: ['./referencias-add.page.scss'],
})
export class ReferenciasAddPage {

  constructor(
    private fireService: FirestoreServiceService,
    private router: Router
  ) { }

  async create(
    arg_titulopub,
    arg_autores,
    arg_tipopub,
    arg_eventorevista,
    arg_doi,
    arg_anyopub
  ) {
      try {
        await this.fireService.addDoc(
          arg_titulopub.value,
          arg_autores.value,
          arg_tipopub.value,
          arg_eventorevista.value,
          arg_doi.value,
          arg_anyopub.value
        ).then(() => { 
          console.log('data sent');
          this.router.navigate(['/referencias']);
          });
      } catch (e) {
        console.log('data send error')
      }
    }

}
