import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'naujienos',
    loadChildren: () => import('./naujienos/naujienos.module').then( m => m.NaujienosPageModule)
  },
  {
    path: 'naujienos-vienas',
    loadChildren: () => import('./naujienos-vienas/naujienos-vienas.module').then( m => m.NaujienosVienasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
