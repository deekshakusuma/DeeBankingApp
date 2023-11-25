import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class ApplicationDataService implements InMemoryDbService {
  createDb() {
    const bankAccounts = [
      {
        id: 1,
        bank_name: 'HSBC',
        account_holder_name: 'John Smith',
        sort_code: '40-40-40',
        account_number: '12345678',
        client_id: 1,
        current_value: 1000,
      },
      {
        id: 2,
        bank_name: 'HSBC',
        account_holder_name: 'John Smith',
        sort_code: '40-40-40',
        account_number: '87654321',
        client_id: 1,
        current_value: 500,
      },
      {
        id: 3,
        bank_name: 'HSBC',
        account_holder_name: 'Jane Smith',
        sort_code: '40-40-40',
        account_number: '12348765',
        client_id: 2,
        current_value: 1000,
      },
      {
        id: 4,
        bank_name: 'HSBC',
        account_holder_name: 'Jane Smith',
        sort_code: '40-40-40',
        account_number: '56781234',
        client_id: 2,
        current_value: 500,
      },
    ];

    const transactions = [
      {
        id: 1,
        transaction_type: 'DEPOSIT',
        amount: 100,
        source_bank_account_id: null,
        target_bank_account_id: 1,
        description: 'Initial deposit',
      },
      {
        id: 2,
        transaction_type: 'DEPOSIT',
        amount: 100,
        source_bank_account_id: null,
        target_bank_account_id: 2,
        description: 'Initial deposit',
      },
      {
        id: 3,
        transaction_type: 'DEPOSIT',
        amount: 100,
        source_bank_account_id: null,
        target_bank_account_id: 3,
        description: 'Initial deposit',
      },
      {
        id: 4,
        transaction_type: 'DEPOSIT',
        amount: 100,
        source_bank_account_id: null,
        target_bank_account_id: 4,
        description: 'Initial deposit',
      },
      {
        id: 5,
        transaction_type: 'WITHDRAWAL',
        amount: 50,
        source_bank_account_id: 1,
        target_bank_account_id: null,
        description: 'Initial deposit',
      },
    ];

    return { bank_accounts: bankAccounts, transactions };
  }
}
