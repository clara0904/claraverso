import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhasService } from '../../services/resenhas';
import { Resenha } from '../../models/resenha.model';
import { ResenhaCardComponent } from '../../shared/components/resenha-card/resenha-card';
import { Menu } from "../../shared/components/menu/menu";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ResenhaCardComponent, Menu],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  todas: Resenha[] = [];
  livros: Resenha[] = [];
  filmes: Resenha[] = [];
  series: Resenha[] = [];

  constructor(private resenhasService: ResenhasService) {}

  ngOnInit(): void {
    this.todas = this.resenhasService.getResenhas();

  this.livros = this.todas.filter((r: Resenha) => r.tipo === 'livro');
  this.filmes = this.todas.filter((r: Resenha) => r.tipo === 'filme');
  this.series = this.todas.filter((r: Resenha) => r.tipo === 'serie');
  }
}
