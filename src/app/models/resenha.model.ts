export interface Resenha {
  id: number;
  titulo: string;
  tipo: 'livro' | 'filme' | 'serie';
  nota: number;
  genero: string;
  descricao: string;
  resenha: string;
  imagem: string;
}
