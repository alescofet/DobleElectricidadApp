import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatTableModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class InvoicesModule { }
