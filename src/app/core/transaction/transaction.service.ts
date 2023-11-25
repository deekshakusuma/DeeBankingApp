import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ExtendedTransaction, Transaction, TransactionCreate } from './transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<Transaction[]>('/api/transactions');
  }

  createTransaction(data: TransactionCreate) {
    return this.http.post<Transaction>('/api/transactions', data);
  }

  // getEnhancedTransactions(): Observable<ExtendedTransaction[]> { }
}