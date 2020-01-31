import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

   isMouseOver: boolean;
   valorAtual: string;
   valorSalvo: string;
   nomePortal: string;
   cursos: string[] = ["Angular", "Java", "Ext JS"];

   nomeDoCurso: string = 'Angular';
   valorInicial: number = 10;

  constructor() { 
    this.nomePortal = 'http://rafael.training';
  }

  getValor()
  {
    return 1;    
  }

  salvarValor(valor: string)
  {
    this.valorSalvo = valor; 
  }

  onMouseOverOut()
  {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent)
  {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  botaoClicado()
  {
    alert('Botão clicado!');
  }

  onMudouValor(evento)
  {
    console.log(evento.novoValor);
  }

  ngOnInit() {
    
  }

}
