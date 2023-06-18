import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../../services/quotation.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public quotations = [
    'CAD-BRL',
    'ARS-BRL',
    'GBP-BRL'
  ];

  constructor( ) {

  }
  ngOnInit(): void { }

}
