import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '../interfaces/fornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private fornecedoresUrl = "http://localhost:3000/fornecedores";
  constructor(private http: HttpClient) { 

  }

  listar(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.fornecedoresUrl) as Observable<Fornecedor[]>;

    //return this.clientes;
  }
  getById(id:string): Observable<Fornecedor>{
    return this.http.get(`${this.fornecedoresUrl}/${id}`) as Observable<Fornecedor>

  }

  remover(id:string){
    
    return this.http.delete(`${this.fornecedoresUrl}/${id}`)

  }
  httpHeader = {
    headers:{
      "Content-Type":"application/json"
    }
  }
  atualizar(fornecedor:Fornecedor){
    return this.http.put(`${this.fornecedoresUrl}/${fornecedor.id}`,fornecedor,this.httpHeader)


  }

  adicionar(fornecedor:Fornecedor){
        // this.clientes.push(cliente);
    return this.http.post(this.fornecedoresUrl, fornecedor, this.httpHeader)
  }
}


