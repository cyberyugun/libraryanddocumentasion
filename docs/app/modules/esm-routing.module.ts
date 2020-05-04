import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedComponent } from './get-started/get-started.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  { path: 'introduction', component: GetStartedComponent },
  { path: 'components', component: ComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
