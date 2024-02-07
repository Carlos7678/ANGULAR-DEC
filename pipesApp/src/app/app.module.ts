import {LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localeFR from '@angular/common/locales/fr';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';



registerLocaleData(localeES)
registerLocaleData(localeFR);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, PrimeNgModule, SharedModule,VentasModule],
  providers: [
 {provide: LOCALE_ID, useValue:'FR'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
