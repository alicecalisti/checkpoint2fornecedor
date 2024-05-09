import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FornecedorDetailComponent } from './components/fornecedor-detail/fornecedor-detail.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },    
    { path: 'fornecedor/:id', component: FornecedorDetailComponent },
    { path: 'fornecedor', component: FornecedorComponent },
    { path: '**', component: HomeComponent }
];


