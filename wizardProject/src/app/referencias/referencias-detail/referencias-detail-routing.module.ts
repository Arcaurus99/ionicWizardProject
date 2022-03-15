import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciasDetailPage } from './referencias-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenciasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenciasDetailPageRoutingModule {}
