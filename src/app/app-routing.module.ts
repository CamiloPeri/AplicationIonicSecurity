import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  // { path: "home", loadChildren: "../pages/generic-home/generic-home.module#GenericHomeModule" },

  { path: "home", loadChildren: "../pages/generic-home/generic-home.module#GenericHomeModule" },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('../pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'conoce',
    loadChildren: () => import('../pages/conoce/conoce.module').then(m => m.ConocePageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('../pages/datos/datos.module').then(m => m.DatosPageModule)
  },
  {
    path: 'exclusion',
    loadChildren: () => import('../pages/exclusion/exclusion.module').then(m => m.ExclusionPageModule)
  },
  {
    path: 'cobertura',
    loadChildren: () => import('../pages/cobertura/cobertura.module').then(m => m.CoberturaPageModule)
  },


  
 

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
