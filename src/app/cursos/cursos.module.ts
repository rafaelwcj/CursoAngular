import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [CursosComponent,
                CursosDetalheComponent,
                InputPropertyComponent,
                OutputPropertyComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
