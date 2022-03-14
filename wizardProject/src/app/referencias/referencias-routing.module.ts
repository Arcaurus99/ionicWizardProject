import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciasPage } from './referencias.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenciasPageRoutingModule {}
