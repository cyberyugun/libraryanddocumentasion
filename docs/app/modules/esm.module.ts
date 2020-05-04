import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './esm-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { ComponentsComponent } from './components/components.component';

import { SaltModule } from 'salt';

import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    html: () => import('highlight.js/lib/languages/xml')
  };
}
@NgModule({
  declarations: [
    GetStartedComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HighlightModule,
    SaltModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        languages: getHighlightLanguages
      }
    }
  ],
})
export class EsmModule { }
