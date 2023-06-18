import { Component, Input, OnInit } from '@angular/core';
import { ObjectQuotation, Quotation } from '../../interfaces/quotation';
import { QuotationService } from '../../services/quotation.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() quotation!: string;
  private interval: number = 3;
  public quotations!: ObjectQuotation;
  public numberFormated!: number;
  public loading: boolean = false;
  public error: boolean = false;

  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {
    this.loading = true;
    let now = new Date();
    let diff = 0;
    let storage = localStorage.getItem(this.quotation);
    let item;

    if(storage != null) {
      item  = JSON.parse(storage);
      diff = (now.getTime() - new Date(item.update).getTime()) / 1000 / 60;
    }

    if(diff > 3 || !storage) {
      this.getQuotations(this.quotation);
    } else {
      this.setInformations(item);
    }

    setInterval(() => {
      this.getQuotations(this.quotation);
    }, (this.interval * 60000));
  }

  public reload(coin: string) {
    this.getQuotations(coin);
  }


  public getQuotations(quotation: string) {
    const currentDate = new Date();

    this.quotationService.getQuotation(quotation).subscribe({
      next: (quotations: Quotation[]) => {
        let arrayQuotation = Object.entries(quotations).map(([key, value]) => ({ key, value, update: currentDate }));
        this.setInformations(arrayQuotation[0]);
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }

  public setInformations(item: any) {
    this.quotations = item;
    this.numberFormated = parseFloat(this.quotations.value.bid);
    localStorage.setItem(this.quotation, JSON.stringify(this.quotations));
    this.loading = false;
    this.error = false;
  }
}
