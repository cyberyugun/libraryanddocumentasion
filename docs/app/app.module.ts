import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { SaltModule } from 'salt';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SaltModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
