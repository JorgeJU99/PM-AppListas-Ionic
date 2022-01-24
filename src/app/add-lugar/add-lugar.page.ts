import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../Service/lugares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lugar',
  templateUrl: './add-lugar.page.html',
  styleUrls: ['./add-lugar.page.scss'],
})
export class AddLugarPage implements OnInit {
  lugar: string;
  imagen: string;

  constructor(private lugaresService: LugaresService, private router: Router) {}

  ngOnInit() {}

  addLugar(titulo: string, imagen: string) {
    this.lugaresService.addLugar(titulo, imagen);
    this.router.navigate(['/lugares']);
  }
}
