import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './modules';

// Routes config
const routes: Routes = [
  { path: 'docs', loadChildren: () => import('./modules/esm.module').then(m => m.EsmModule) },
  { path: '**', redirectTo: 'docs/introduction',  pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
