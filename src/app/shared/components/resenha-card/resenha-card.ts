import { Component, Input } from '@angular/core';
import { Resenha } from '../../../models/resenha.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resenha-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resenha-card.html',
  styleUrls: ['./resenha-card.css']
})
export class ResenhaCardComponent {

  @Input() resenha!: Resenha;
  
  get estrelasCheias(): number {
  return Math.floor(this.resenha.nota);
  }

  get temMeiaEstrela(): boolean {
    return this.resenha.nota % 1 !== 0;
  }

  get estrelasVazias(): number {
    return 5 - this.estrelasCheias - (this.temMeiaEstrela ? 1 : 0);
  }

}

