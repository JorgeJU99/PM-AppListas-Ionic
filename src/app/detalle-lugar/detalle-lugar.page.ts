import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LugaresService } from '../Service/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sitios } from '../lugares/Entidades/Sitio';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {
  lugar: Sitios;

  constructor(
    private toastController: ToastController,
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

  eliminarLugar() {
    this.lugaresService.deleteLugar(this.lugar.Codigo);
    this.router.navigate(['/lugares']);
  }

  async notificacionEliminar() {
    const toast = await this.toastController.create({
      header: 'Eliminar lugar',
      message: 'Desea eliminar el lugar?',
      duration: 2000,
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
    toast.present();
  }
}
