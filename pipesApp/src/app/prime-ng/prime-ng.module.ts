import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';

import {FieldsetModule} from 'primeng/fieldset';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  exports: [CommonModule,CardModule, ButtonModule, MenubarModule,FieldsetModule,BrowserAnimationsModule],
})
export class PrimeNgModule {}
