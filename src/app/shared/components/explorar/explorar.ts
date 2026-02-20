import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResenhasService } from '../../../services/resenhas';
import { CommonModule } from '@angular/common';
import { ResenhaCardComponent } from '../resenha-card/resenha-card';
import { FormsModule } from '@angular/forms';
import { NavbarExplorar } from '../navbar-explorar/navbar-explorar';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [CommonModule, ResenhaCardComponent, FormsModule, NavbarExplorar],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css',
})

export class Explorar {
  
  busca: string = '';
  tipoSelecionado: string | null = null;
  resenhas: any[] = [];
  selecionarTipo(tipo: string | null) {
    this.tipoSelecionado = tipo;
  }


  constructor(
    private route: ActivatedRoute,
    private resenhasService: ResenhasService
  ) {}

  ngOnInit() {

    this.resenhas = this.resenhasService.getResenhas();

    this.route.queryParams.subscribe(params => {
      this.tipoSelecionado = params['tipo'] || null;
    });
  }

  get resenhasFiltradas() {
  return this.resenhas.filter(resenha => {

    const correspondeTipo =
      !this.tipoSelecionado ||
      resenha.tipo === this.tipoSelecionado;

    const correspondeBusca =
      resenha.titulo
        .toLowerCase()
        .includes(this.busca.toLowerCase());

    return correspondeTipo && correspondeBusca;
  });
}
}