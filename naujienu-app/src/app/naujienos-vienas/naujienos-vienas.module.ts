import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaujienosVienasPageRoutingModule } from './naujienos-vienas-routing.module';

import { NaujienosVienasPage } from './naujienos-vienas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaujienosVienasPageRoutingModule
  ],
  declarations: [NaujienosVienasPage]
})
export class NaujienosVienasPageModule {}
