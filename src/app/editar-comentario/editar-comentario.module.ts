import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EditarComentarioComponent } from './editar-comentario.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [EditarComentarioComponent],
  exports: [EditarComentarioComponent],
})
export class EditarComentarioModule {}
