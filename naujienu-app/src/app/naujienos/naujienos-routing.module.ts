import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaujienosPage } from './naujienos.page';

const routes: Routes = [
  {
    path: '',
    component: NaujienosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaujienosPageRoutingModule {}
