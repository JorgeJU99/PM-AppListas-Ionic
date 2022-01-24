/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Sitios } from '../lugares/Entidades/Sitio';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  private Lista: Sitios[] = [
    {
      Codigo: '1',
      Titulo: 'Torre Eiffel',
      ImagenURL:
        'https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg',
      Comentario: ['Lindo lugar', 'Paris'],
    },
    {
      Codigo: '2',
      Titulo: 'Estatua de la Libertad',
      ImagenURL:
        'https://inteng-storage.s3.amazonaws.com/img/iea/ypwqn1mmON/sizes/statue-of-liberty_resize_md.jpg',
      Comentario: ['Hermosa', 'New York'],
    },
    {
      Codigo: '3',
      Titulo: 'Ruina de Machu Picchu',
      ImagenURL:
        'https://viajes.nationalgeographic.com.es/medio/2019/06/06/macu_5da3ead6_1200x630.jpg',
      Comentario: ['Hermosa', 'New York'],
    },
    {
      Codigo: '4',
      Titulo: 'Mitad del Mundo, Quito',
      ImagenURL:
        'https://www.howlanders.com/blog/wp-content/uploads/2021/01/mitad-del-mundo-quito.jpg',
      Comentario: [],
    },
  ];

  constructor() {}

  getLugares(): Sitios[] {
    return this.Lista;
  }

  getLugarByCodigo(codigo: string) {
    return this.Lista.find((ol) => ol.Codigo === codigo);
  }

  addLugar(titulo: string, imagenURL: string) {
    this.Lista.push({
      Codigo: this.Lista.length + 1 + '',
      Titulo: titulo,
      ImagenURL: imagenURL,
      Comentario: [],
    });
  }

  deleteLugar(codigo: string) {
    this.Lista = this.Lista.filter((ol) => ol.Codigo !== codigo);
  }
}
