export interface ObjectQuotation {
  key: string,
  value: Quotation,
  update: Date
}

export interface Quotation {
  ask: string,
  bid: string,
  code: string,
  codein: string,
  create_date: string,
  high: string,
  low: string,
  name: string,
  pctChange: string,
  timestamp: string,
  varBid: string,
}
