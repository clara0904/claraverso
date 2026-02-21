import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Explorar } from './shared/components/explorar/explorar';
import { DetalheResenha } from './shared/components/detalhe-resenha/detalhe-resenha';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
  path: 'explorar',
    component: Explorar
  },
  {
    path: 'resenha/:id',
    component: DetalheResenha
  }
];
