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

  livros: Resenha[] = [];
  filmes: Resenha[] = [];
  series: Resenha[] = [];

  constructor(private resenhaService: ResenhasService) {}

  ngOnInit(): void {
    const todas = this.resenhaService.getResenhas();

    this.livros = todas.filter(r => r.tipo === 'livro');
    this.filmes = todas.filter(r => r.tipo === 'filme');
    this.series = todas.filter(r => r.tipo === 'serie');
  }
}
