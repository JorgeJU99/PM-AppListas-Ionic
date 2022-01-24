import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLugarPageRoutingModule } from './add-lugar-routing.module';

import { AddLugarPage } from './add-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLugarPageRoutingModule
  ],
  declarations: [AddLugarPage]
})
export class AddLugarPageModule {}
