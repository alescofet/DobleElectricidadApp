import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
