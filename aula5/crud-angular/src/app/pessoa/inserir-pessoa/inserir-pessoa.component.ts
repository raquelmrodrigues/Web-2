import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})

export class InserirPessoaComponent {
  @ViewChild('formPessoa') formPessoa! : NgForm
  pessoa! : Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  inserir(): void {
    if(this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(["/pessoas"]);
    }
  }
}
