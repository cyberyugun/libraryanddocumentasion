import { NgModule } from '@angular/core';
import { DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

// Import all components
import { ButtonComponent } from '../..';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  entryComponents: [
    ButtonComponent
  ],
})
export class ButtonModule implements DoBootstrap {
  constructor(
    injector: Injector
  ){
    const strategyFactory = new ElementZoneStrategyFactory(ButtonComponent, injector);
    const webComponent = createCustomElement(
      ButtonComponent,
      { injector, strategyFactory }
    );

    customElements.define('salt-button', webComponent);
  }

  ngDoBootstrap(){}
}
