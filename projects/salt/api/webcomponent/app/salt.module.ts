import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './';
import { ButtonDirective } from './';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ButtonComponent,
    ButtonDirective
  ],
  exports: [
    ButtonComponent,
    ButtonDirective
  ]
})
export class SaltModule {
  constructor(){}
}
