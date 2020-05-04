import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  constructor(
  ) { }

  response$: HighlightResult;

  code = `
    <section>
        <button class="ft-button">
            <span class="button--label">Basic</span>
        </button>
        <button class="ft-button--primary">
            <span class="button--label">Primary</span>
        </button>
        <button class="ft-button--accent">
            <span class="button--label">Accent</span>
        </button>
        <button class="ft-button--warn">
            <span class="button--label">Warn</span>
        </button>
        <button class="ft-button ft-button--shadow">
            <span class="button--label">Shadow</span>
        </button>
    </section>
  `;

  ngOnInit(): void {
  }

}
