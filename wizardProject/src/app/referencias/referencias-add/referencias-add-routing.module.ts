import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciasAddPage } from './referencias-add.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenciasAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenciasAddPageRoutingModule {}
