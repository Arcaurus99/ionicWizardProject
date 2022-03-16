import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'referencias',
    pathMatch: 'full'
  },
  {
    path: 'referencias',
    children:[
      {
        path: "",
        loadChildren: () => import('./referencias/referencias.module').then( m => m.ReferenciasPageModule)
      },
      {
        path: ":refId",
        loadChildren: () => import('./referencias/referencias-detail/referencias-detail.module').then( m => m.ReferenciasDetailPageModule)
      }
    ]
  },
  {
    path: 'new-referencia',
    loadChildren: () => import('./referencias/referencias-add/referencias-add.module').then(m => m.ReferenciasAddPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
