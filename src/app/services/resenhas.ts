import { Injectable } from '@angular/core';
import { Resenha } from '../models/resenha.model';

@Injectable({
  providedIn: 'root'
})
export class ResenhasService {

  private resenhas: Resenha[] = [
    {
      id: 1,
      titulo: 'Melhor do que nos filmes',
      tipo: 'livro',
      nota: 5,
      genero: 'Romance',
      descricao: '',
      resenha: 'Eu amei esse livro. Já fazia um tempo em que eu não lia um romance que aquecesse meu coração dessa forma. Liz é uma romântica incorrigível, e tem seus motivos pra isso. Wes, seu vizinho e inimigo que no fim, era a personificação da criança que puxa seu cabelo pra mostrar que gosta de você. Amei esse casal, sorri bastante de tudo que acontecia com a Liz quando ela tava com o Michael (inclusive, esse não tem senso de urgência nenhum, né?). Foi meu primeiro contato com os livros da Lynn e com certeza pretendo ler outros.',
      imagem: 'imagens/melhordoquenosfilmes.jpg'
    },
    {
      id: 2,
      titulo: 'Powerless',
      tipo: 'livro',
      genero: 'Fantasia',
      nota: 5,
      descricao: '',
      resenha: 'Fiquei envolvida nesse livro desde o primeiro capítulo, tudo o que eu queria era terminar logo pra saber o que iria acontecer. Gostei demais do Kai, da Paedyn, da Adena, do Jax. Foram personagens que me cativaram demais. Achei algumas partes parecidas com "A Seleção" e outras com "Jogos Vorazes", mas só fez eu gostar mais ainda do livro, afinal, são livros que eu amo. O livro terminou de forma emocionante, então já estou iniciando o segundo livro - infelizmente não falam tão bem desse 2° livro, mas tudo bem-  porque não aguentei de ansiedade.',
      imagem: 'imagens/powerless.jpg'
    },
    {
      id: 3,
      titulo: 'Caída por você',
      tipo: 'livro',
      nota: 5,
      genero: 'Romance',
      descricao: '',
      resenha: 'Esse livro ganhou um espaço imenso no meu coração. Me apeguei completamente aos personagens, a todos os acontecimentos, foi lindo ver a Char vivendo, simplesmente vivendo. Acho que eu precisava desse livro, é sempre assim né? A gente precisa de certos livros em determinados momentos, e esse acertou em cheio. ',
      imagem: 'imagens/caidaporvoce.jpg'
    },
    {
      id: 4,
      titulo: 'Clube do livro dos homens',
      tipo: 'livro',
      nota: 4.5,
      genero: 'Romance',
      descricao: '',
      resenha: 'Gostei bastante, é um tipo de clichê que já fazia tempo que eu não lia. Thea e Gavin são uns fofos, é extremamente compreensível o lado dos dois e foi muito bonito ver eles superando tudo.',
      imagem: 'imagens/clubedoslivrosdoshomens.jpg'
    },
    /*{
      id: 5,
      titulo: 'Reckless',
      tipo: 'livro',
      nota: 5,
      descricao: '',
      resenha: 'Uma palavra pra esse livro: aflição. Amei demais esse livro. Amei o entendimento entre a Paedyn e o Kai, que apesar de tudo enxergaram a verdade e escolheram um ao outro, mesmo com suas controvérsias. Li esse livro super rápido, tava tão ansiosa pra saber o fim. E agora estou ansiosa pra ler Fearless. Me apeguei muito a esse universo e esses personagens.',
      imagem: 'imagens/reckless.jpg'
    }*/
  ];

  getResenhas(): Resenha[] {
    return this.resenhas;
  }
}
