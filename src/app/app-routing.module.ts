import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  { path: "login", loadChildren: "../pages/login/login.module#LoginPageModule" },
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
  // {
  //   path: 'conoce',
  //   loadChildren: () => import('../pages/conoce/conoce.module').then(m => m.ConocePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
