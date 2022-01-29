import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LugaresService } from '../Service/lugares.service';

@Component({
  selector: 'app-editar-comentario',
  templateUrl: './editar-comentario.component.html',
})
export class EditarComentarioComponent implements OnInit {
  @Input() index: number;
  @Input() comentarios: string;
  @Input() codigo: string;
  comentario = '';

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private lugaresService: LugaresService
  ) {}

  ngOnInit() {
    this.comentario = this.comentarios;
  }

  editarComentario(comentarioNuevo: string) {
    this.lugaresService.updateComentario(
      comentarioNuevo,
      this.codigo,
      this.index
    );
    this.dismissModal();
  }

  async alertaEditarComentario(comentarioNuevo: string) {
    const alert = await this.alertController.create({
      header: 'Editar comentario',
      message: 'Desea editar el comentario?',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.editarComentario(comentarioNuevo);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    alert.present();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
