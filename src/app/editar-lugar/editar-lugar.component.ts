/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Sitios } from '../lugares/Entidades/Sitio';
import { LugaresService } from '../Service/lugares.service';

@Component({
  selector: 'app-editar-lugar',
  templateUrl: './editar-lugar.component.html',
})
export class EditarLugarComponent implements OnInit {
  @Input() codigo: string;
  datos: Sitios[] = [];
  comentarios = [];
  lugarById: Sitios;
  lugar: string;
  imagen: string;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private lugaresService: LugaresService
  ) {}

  ngOnInit() {
    this.getLugarByCodigo(this.codigo);
  }

  getLugarByCodigo(id) {
    this.lugarById = this.lugaresService.getLugarByCodigo(id);
    this.lugar = this.lugarById.Titulo;
    this.imagen = this.lugarById.ImagenURL;
  }

  getLugarData(id) {
    return this.lugaresService.getLugarByCodigo(id);
  }

  editarLugar(lugar: string, imagen: string) {
    const datos = [];
    datos.push(this.getLugarData(this.codigo));
    for (let index = 0; index < datos[0].Comentario.length; index++) {
      this.comentarios.push(datos[0].Comentario[index]);
    }
    this.datos.push({
      Codigo: this.codigo,
      Titulo: lugar,
      ImagenURL: imagen,
      Comentario: this.comentarios,
    });
    this.lugaresService.updateLugar(this.datos);
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async alertaEditar(lugar: string, imagen: string) {
    const alert = await this.alertController.create({
      header: 'Modificar lugar',
      message: 'Desea modificar el lugar?',
      buttons: [
        {
          text: 'Modificar',
          handler: () => {
            this.editarLugar(lugar, imagen);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    alert.present();
  }
}
