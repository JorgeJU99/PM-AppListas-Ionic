import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LugaresService } from '../Service/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sitios } from '../lugares/Entidades/Sitio';
import { EditarLugarComponent } from '../editar-lugar/editar-lugar.component';
import { EditarComentarioComponent } from '../editar-comentario/editar-comentario.component';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {
  lugar: Sitios;
  comentario = '';

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private lugaresService: LugaresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLugarByCodigo();
  }

  getLugarByCodigo() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('lugarId');
      this.lugar = this.lugaresService.getLugarByCodigo(id);
    });
  }

  editarLugar() {
    this.editarLugarModal();
  }

  eliminarLugar() {
    this.lugaresService.deleteLugar(this.lugar.Codigo);
    this.router.navigate(['/lugares']);
  }

  addComentario(comentario: string) {
    this.lugaresService.addComentario(this.lugar.Codigo, comentario);
    this.comentario = '';
  }

  editarComentario(id: number, comentario: string) {
    this.editarComentarioModal(id, comentario);
  }

  ionViewWillEnter() {
    this.getLugarByCodigo();
  }

  async alertaEliminar() {
    const alert = await this.alertController.create({
      header: 'Eliminar lugar',
      message: 'Desea eliminar el lugar?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarLugar();
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    alert.present();
  }

  async editarLugarModal() {
    const modal = await this.modalController.create({
      component: EditarLugarComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        codigo: this.lugar.Codigo,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }

  async editarComentarioModal(id: number, comentario: string) {
    const modal = await this.modalController.create({
      component: EditarComentarioComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        index: id,
        comentarios: comentario,
        codigo: this.lugar.Codigo,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }
}
