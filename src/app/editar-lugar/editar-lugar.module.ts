import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EditarLugarComponent } from './editar-lugar.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [EditarLugarComponent],
  exports: [EditarLugarComponent],
})
export class EditarLugarModule {}
