import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaujienosVienasPage } from './naujienos-vienas.page';

const routes: Routes = [
  {
    path: '',
    component: NaujienosVienasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaujienosVienasPageRoutingModule {}
