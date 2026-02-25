import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarExplorar } from "../navbar-explorar/navbar-explorar";
import { ResenhasService } from '../../../services/resenhas';
import { Resenha } from '../../../models/resenha.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-resenha',
  standalone: true,
  imports: [CommonModule,NavbarExplorar],
  templateUrl: './detalhe-resenha.html',
  styleUrl: './detalhe-resenha.css',
})
export class DetalheResenha {
  id!: number;
  resenha?: Resenha;
  estrelasCheias = 0;
  estrelasVazias = 0;
  temMeiaEstrela = false;

  constructor(private route: ActivatedRoute, private resenhasService: ResenhasService, private router: Router) {}
  
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = Number(idParam);
      this.resenha = this.resenhasService.buscarPorId(this.id);
    }
    if (this.resenha) {
      const nota = this.resenha.nota;

      this.estrelasCheias = Math.floor(nota);
      this.temMeiaEstrela = nota % 1 >= 0.5;
      this.estrelasVazias = 5 - this.estrelasCheias - (this.temMeiaEstrela ? 1 : 0);
    }
  }

  mostrarConfirm = false;
  mensagem: string | null = null;

  abrirConfirm() {
    this.mostrarConfirm = true;
  }

  cancelarExclusao() {
    this.mostrarConfirm = false;
  }

  confirmarExclusao() {
    if (!this.resenha) return;

    this.resenhasService.removerResenha(this.resenha.id);

    this.mensagem = `Resenha "${this.resenha.titulo}" apagada com sucesso!`;

    setTimeout(() => {
      this.router.navigate(['/']).then(() => {
        window.location.reload(); 
      });
    }, 1500);
  }
}
