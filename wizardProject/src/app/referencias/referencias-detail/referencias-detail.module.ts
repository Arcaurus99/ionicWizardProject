import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferenciasDetailPageRoutingModule } from './referencias-detail-routing.module';

import { ReferenciasDetailPage } from './referencias-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferenciasDetailPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ReferenciasDetailPage]
})
export class ReferenciasDetailPageModule {}
