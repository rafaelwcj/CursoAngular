import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', null) campoValorInput: ElementRef;

  constructor() { }

  incrementa(){
     this.campoValorInput.nativeElement.valor++;
     this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa()
  {
    this.campoValorInput.nativeElement.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  ngOnInit() {
  }

}
