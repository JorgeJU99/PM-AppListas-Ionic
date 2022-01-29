import { EditarComentarioComponent } from './../editar-comentario/editar-comentario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLugarPageRoutingModule } from './detalle-lugar-routing.module';

import { DetalleLugarPage } from './detalle-lugar.page';

import { EditarLugarModule } from '../editar-lugar/editar-lugar.module';
import { EditarComentarioModule } from '../editar-comentario/editar-comentario.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleLugarPageRoutingModule,
    EditarLugarModule,
    EditarComentarioModule,
  ],
  declarations: [DetalleLugarPage],
})
export class DetalleLugarPageModule {}
