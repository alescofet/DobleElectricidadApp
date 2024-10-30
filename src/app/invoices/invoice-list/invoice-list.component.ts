import * as XLSX from 'xlsx';

import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

interface Invoice {
  name: string;
  date: string;
  amount: number;
  address: string;
  fileUrl: string;
}

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [
    {
      name: 'Factura 1',
      date: '2023-10-01',
      amount: 150.75,
      address: 'Calle Principal 123',
      fileUrl: '/assets/invoices/invoice1.pdf'
    },
    {
      name: 'Factura 2',
      date: '2023-09-15',
      amount: 200.00,
      address: 'Avenida Secundaria 456',
      fileUrl: '/assets/invoices/invoice2.pdf'
    }
    // facturas mockeadas para la prueba, deberiamos recogerlas de una API
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  downloadInvoice(invoice: Invoice): void { //Enviar toda la informacion de la factura seleccionada
    const invoiceData = [
      {
        [this.translateService.instant("INVOICES.NAME")]: invoice.name,
        [this.translateService.instant("INVOICES.DATE")]: invoice.date,
        [this.translateService.instant("INVOICES.IMPORT")]: invoice.amount,
        [this.translateService.instant("INVOICES.ADDRESS")]: invoice.address
      }
    ];

    // Crear un libro de trabajo y una hoja de trabajo
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(invoiceData);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Factura');

    // Guardar el archivo xlsx (Excel)
    const excelFileName = `${invoice.name}.xlsx`;
    XLSX.writeFile(workbook, excelFileName);
  }
}
