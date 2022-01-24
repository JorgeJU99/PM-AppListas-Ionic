/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LugaresService } from '../Service/lugares.service';
import { Sitios } from './Entidades/Sitio';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  ListaSitios: Sitios[];
  constructor(private router: Router, private Oser: LugaresService) {}

  goToHome() {}

  addLugar() {
    this.router.navigate(['/add-lugar']);
  }

  ngOnInit() {
    this.ListaSitios = this.Oser.getLugares();
    console.log(this.Oser.getLugares());
  }

  /* recargarLista() {
    this.ListaSitios = this.Oser.getLugares();
  } */
}
