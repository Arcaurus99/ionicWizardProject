import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciasPage } from './referencias.page';

const routes: Routes = [
  {
    path: '',
    component: ReferenciasPage
  },  {
    path: 'referencias-detail',
    loadChildren: () => import('./referencias-detail/referencias-detail.module').then( m => m.ReferenciasDetailPageModule)
  },
  {
    path: 'referencias-add',
    loadChildren: () => import('./referencias-add/referencias-add.module').then( m => m.ReferenciasAddPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenciasPageRoutingModule {}
