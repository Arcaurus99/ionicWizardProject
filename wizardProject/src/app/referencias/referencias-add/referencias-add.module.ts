import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferenciasAddPageRoutingModule } from './referencias-add-routing.module';

import { ReferenciasAddPage } from './referencias-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferenciasAddPageRoutingModule
  ],
  declarations: [ReferenciasAddPage]
})
export class ReferenciasAddPageModule {}
