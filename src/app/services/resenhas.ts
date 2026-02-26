import { Injectable } from '@angular/core';
import { Resenha } from '../models/resenha.model';

@Injectable({
  providedIn: 'root'
})
export class ResenhasService {

  private chave = 'resenhas';

  

  private resenhas: Resenha[] = []
  private resenhasPadrao: Resenha[] = [
    {
      id: 1,
      titulo: 'Melhor do que nos filmes',
      tipo: 'livro',
      nota: 5,
      genero: 'Romance',
      descricao: 'Elizabeth Buxbaum sempre soube que seu vizinho não seria um bom namorado. Apesar de todos acharem Wesley Bennett simpático e muito bonito, Liz tinha certeza de que, na verdade, ele era um chato de galochas. Mas Michael Young era diferente. O amor de infância de Liz estava à altura dos protagonistas das comédias românticas que ela tanto gostava, só que havia se mudado para longe quando os dois ainda eram crianças. Dez anos depois, ele estava de volta, mais lindo e charmoso do que nunca. Esbarrar com o garoto na escola foi como um sinal do universo. O último ano do ensino médio clamava por acontecimentos grandiosos, um baile inesquecível e momentos apaixonantes. Por isso, como uma boa romântica incurável, Liz estava determinada a fazer qualquer coisa para conquistar o verdadeiro amor. Até mesmo pedir ajuda ao vizinho irritante. O plano era infalível: fazer com que Michael notasse sua existência e a convidasse para o tão sonhado baile de formatura. Mas à medida que Wes e Liz se aproximam, ela vai questionar tudo o que sabe sobre o amor e descobrir que talvez seu “felizes para sempre” seja surpreendente ― e melhor do que ela poderia imaginar',
      resenha: 'Eu amei esse livro. Já fazia um tempo em que eu não lia um romance que aquecesse meu coração dessa forma. Liz é uma romântica incorrigível, e tem seus motivos pra isso. Wes, seu vizinho e inimigo que no fim, era a personificação da criança que puxa seu cabelo pra mostrar que gosta de você. Amei esse casal, sorri bastante de tudo que acontecia com a Liz quando ela tava com o Michael (inclusive, esse não tem senso de urgência nenhum, né?). Foi meu primeiro contato com os livros da Lynn e com certeza pretendo ler outros.',
      imagem: 'imagens/melhordoquenosfilmes.jpg'
    },
    {
      id: 2,
      titulo: 'Powerless',
      tipo: 'livro',
      genero: 'Fantasia',
      nota: 5,
      descricao: 'Kai é um príncipe poderoso, treinado para matar. Paedyn é uma garota comum que sobrevive fingindo ter poderes. Quando os caminhos dos dois se encontram por acaso, eles não imaginam que serão oponentes em uma competição mágica brutal. Nem que se verão envolvidos em um romance proibido e perigoso — tão impossível quanto inevitável. Apenas os Notáveis são aceitos no reino de Ilya. Os poderes diversos que possuem há décadas foram concedidos pela Peste, e aqueles que nascem Comuns são apenas isso — comuns. Quando o rei decretou que qualquer pessoa sem uma habilidade especial fosse perseguida e banida, Paedyn Gray tornou-se criminosa por destino e ladra por necessidade. Sobreviver nas favelas sem ter um poder não é simples, e Paedyn sabe disso melhor do que ninguém. Treinada para mentir, ela se apresenta como uma Psíquica, camuflando-se da melhor forma possível em meio aos outros. Até o dia em que salva a vida de Kai, um dos príncipes de Ilya. De repente, ela se vê convocada para as Provas do Expurgo, uma competição destinada a exibir os poderes dos Notáveis — exatamente o que ela não tem. Para piorar, Kai é um de seus oponentes, e fica cada vez mais difícil ignorar a atração que cresce entre os dois. A realidade é que, se as Provas não matarem Paedyn, Kai certamente o fará quando descobrir que ela é… completamente Comum.',
      resenha: 'Fiquei envolvida nesse livro desde o primeiro capítulo, tudo o que eu queria era terminar logo pra saber o que iria acontecer. Gostei demais do Kai, da Paedyn, da Adena, do Jax. Foram personagens que me cativaram demais. Achei algumas partes parecidas com "A Seleção" e outras com "Jogos Vorazes", mas só fez eu gostar mais ainda do livro, afinal, são livros que eu amo. O livro terminou de forma emocionante, então já estou iniciando o segundo livro - infelizmente não falam tão bem desse 2° livro, mas tudo bem-  porque não aguentei de ansiedade.',
      imagem: 'imagens/powerless.jpg'
    },
    {
      id: 3,
      titulo: 'Caída por você',
      tipo: 'livro',
      nota: 5,
      genero: 'Romance',
      descricao: 'Organizar a festa de formatura perfeita é o último item na lista de desejos de Charlotte Wu, uma ultradisciplinada aluna do último ano do ensino médio. Tudo está correndo de acordo com o planejado até que, durante a decoração do salão, um escorregão faz Charlotte despencar de uma escada e aterrissar em cheio em cima de seu arqui-inimigo, o detestavelmente sarado J. T. Renner. Quando ela acorda, se vê em uma cama desconhecida, com 30 anos de idade, ao lado do noivo. E o pior de tudo: ele é o Renner. Ou os dois enlouqueceram de vez ou foram arremessados na vida adulta e ficarão presos para sempre em seu corpo de 30 anos. Agora que eles são a única constante na vida um do outro, Charlotte e Renner se unem para descobrir juntos tudo que mudou durante o tempo que perderam. De quebra, Charlotte ainda descobre que Renner tem muito mais a mostrar do que seu charme irritantemente atlético – e que mais importante do que ultrapassar os marcos da vida é saber aproveitar o que está entre eles.',
      resenha: 'Esse livro ganhou um espaço imenso no meu coração. Me apeguei completamente aos personagens, a todos os acontecimentos, foi lindo ver a Char vivendo, simplesmente vivendo. Acho que eu precisava desse livro, é sempre assim né? A gente precisa de certos livros em determinados momentos, e esse acertou em cheio. ',
      imagem: 'imagens/caidaporvoce.jpg'
    },
    {
      id: 4,
      titulo: 'Clube do livro dos homens',
      tipo: 'livro',
      nota: 4.5,
      genero: 'Romance',
      descricao: 'A primeira regra do clube do livro é: não fale sobre o clube do livro. Gavin Scott é um astro do beisebol, devotado ao esporte. No auge de sua carreira, ele descobre um segredo humilhante: a esposa, Thea, sempre fingiu ter prazer na cama. Magoado, Gavin para de falar com ela e acaba piorando o relacionamento, que já vinha se deteriorando. Quando Thea pede o divórcio, ele percebe que o orgulho e o medo podem fazê-lo perder tudo. Bem-vindos ao Clube do Livro dos Homens. Desesperado, Gavin encontra ajuda onde menos espera: um clube secreto de romances, composto por alguns dos seus colegas de time. Para salvar seu casamento, eles recorrem à leitura de uma sensual trama de época, Cortejando a condessa. Só que vai ser preciso muito mais do que palavras floreadas e gestos grandiosos para que Gavin recupere a confiança da esposa.',
      resenha: 'Gostei bastante, é um tipo de clichê que já fazia tempo que eu não lia. Thea e Gavin são uns fofos, é extremamente compreensível o lado dos dois e foi muito bonito ver eles superando tudo.',
      imagem: 'imagens/clubedoslivrosdoshomens.jpg'
    },
    {
      id: 5,
      titulo: 'Reckless',
      tipo: 'livro',
      genero: 'Fantasia',
      nota: 5,
      descricao: 'Após o final arrebatador de Powerless, Reckless é uma sequência poderosa e inebriante de romance e redenção entre duas pessoas destinadas a se odiarem, mas cujo maior pecado é se amarem. O reino de Ilya está em polvorosa. Depois dos resultados chocantes das Provas do Expurgo, das quais escapou viva por um milagre, Paedyn Gray, uma Comum, precisa lidar com as consequências de suas ações. O rei quer sua cabeça a todo custo ― se grudada no pescoço ou numa bandeja de prata, ela não vai permanecer em Ilya para descobrir. Mas, para isso, precisará correr na direção contrária à que seu coração deseja. Kai Azer, Executor do reino, jurou encontrar Paedyn e trazer justiça por seus atos contra a Coroa. Pelas areias do Deserto Escaldante e nas perigosas ruas da cidade de Dor, ele terá que ir atrás da única pessoa que preferia não ter que capturar. Em uma perseguição frenética, Kai e Paedyn precisarão encarar algo muito maior do que suas obrigações e sua luta pela sobrevivência: o que sentem um pelo outro. Mas, em uma cidade sem Notáveis, a hierarquia entre caça e caçador se altera, e a batalha entre dever e desejo pode ser fatal.',
      resenha: 'Uma palavra pra esse livro: aflição. Amei demais esse livro. Amei o entendimento entre a Paedyn e o Kai, que apesar de tudo enxergaram a verdade e escolheram um ao outro, mesmo com suas controvérsias. Li esse livro super rápido, tava tão ansiosa pra saber o fim. E agora estou ansiosa pra ler Fearless. Me apeguei muito a esse universo e esses personagens.',
      imagem: 'imagens/reckless.jpg'
    },
    {
      id: 6,
      titulo: 'Meninas Malvadas',
      tipo: 'filme',
      nota: 5,
      genero: 'Comédia',
      descricao: 'Meninas Malvadas (2004) acompanha Cady Heron (Lindsay Lohan), uma adolescente educada na África que entra pela primeira vez em uma escola pública americana. Ela precisa navegar pela complexa hierarquia social e acaba se envolvendo com "As Poderosas", um grupo de elite manipulador liderado por Regina George. ',
      resenha: 'Meu filme conforto, posso ver mil vezes e não canso.',
      imagem: 'imagens/meninasmalvadas.jpg'
    },
    {
      id: 8,
      titulo: 'Stranger Things',
      tipo: 'serie',
      nota: 4.7,
      genero: 'Terror',
      descricao: 'Stranger Things é uma série de ficção científica e terror da Netflix ambientada nos anos 80, na cidade fictícia de Hawkins, Indiana. A trama foca no misterioso desaparecimento do garoto Will Byers, levando amigos, família e a polícia a enfrentarem forças sobrenaturais, experimentos secretos do governo e o "Mundo Invertido"',
      resenha: 'Ver essas criancinhas crescendo é demais pra mim. Amo Hawkinssss!',
      imagem: 'imagens/strangerthings.jpg'
    },
  ];

  constructor() {
    this.carregarResenhas();
  }
  
  getResenhas(): Resenha[] {
    return [...this.resenhas];
  }

  adicionarResenha(resenha: Resenha) {
    this.resenhas.push(resenha);
    this.salvarResenhas();
  }

  buscarPorId(id: number) {
    if (typeof window !== 'undefined') {
      const resenhas = this.getResenhas();
      return resenhas.find(r => r.id === id);
    }
    return undefined;
  }

  removerResenha(id: number) {
    this.resenhas = this.resenhas.filter(r => r.id !== id);
    this.salvarResenhas();
  }

  private salvarResenhas() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('resenhas', JSON.stringify(this.resenhas));
    }
  }

  private carregarResenhas() {
    if (typeof window === 'undefined') return;

    const data = localStorage.getItem('resenhas');
    const resenhasSalvas = data ? JSON.parse(data) : null;

    if (!resenhasSalvas || resenhasSalvas.length === 0) {
      this.resenhas = [...this.resenhasPadrao];
      this.salvarResenhas();
    } else {
      this.resenhas = resenhasSalvas;
    }
  }

  listarResenhas() {
    return this.resenhas;
  }

}
