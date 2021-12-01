import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaujienosPageRoutingModule } from './naujienos-routing.module';

import { NaujienosPage } from './naujienos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaujienosPageRoutingModule
  ],
  declarations: [NaujienosPage]
})
export class NaujienosPageModule {}
