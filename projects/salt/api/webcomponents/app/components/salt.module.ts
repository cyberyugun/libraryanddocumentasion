import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/buttons/button.component';
import { ButtonDirective } from './components/buttons/button.directive';

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
