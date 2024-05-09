import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Fornecedor } from '../../interfaces/fornecedor';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fornecedor-detail.component.html',
  styleUrl: './fornecedor-detail.component.css'
})
export class FornecedorDetailComponent {
  fornecedor?:Fornecedor;
  fornecedorForm: FormGroup = new FormGroup({})

  constructor(private route: ActivatedRoute, private fornecedorService:FornecedorService, private formbuilder:FormBuilder){
    this.getFornecedorById();

  }
  id?:string;
  getFornecedorById(){
    this.id = this.route.snapshot.paramMap.get('id')?? '';
    this.fornecedorService.getById(this.id).subscribe((fornecedorResponse)=>(this.fornecedor = fornecedorResponse));
    this.fornecedorForm = this.formbuilder.group({
      nome: [this.fornecedor?.nome],
      endereco: [this.fornecedor?.endereco],
      telefone: [this.fornecedor?.telefone],
      id: [this.fornecedor?.id]
    })

  }

  atualizar():void{
    if(this.fornecedorForm.valid){
      const fornecedorNovo:Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        endereco: this.fornecedorForm.value.endereco,
        telefone: this.fornecedorForm.value.telefone,
        id: this.fornecedorForm.value.id
      }

      this.fornecedorService.atualizar(fornecedorNovo).subscribe();
      alert('Alterado com Sucesso!')

    }
  }

}
