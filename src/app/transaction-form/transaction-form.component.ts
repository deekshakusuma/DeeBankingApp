import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TransactionType } from '../core/transaction/transaction.interface';
import { BankAccountService } from '../core/bank-account/bank-account.service';
import { BankAccount } from '../core/bank-account/bank-account.interface';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  
  ///#region Injected Services
  private fb = inject(FormBuilder);
  private bankAccountService = inject(BankAccountService);
  //#endregion

  //#region Public Properties
  public transactionTypes = TransactionType
  public transactionForm: FormGroup;
  public bankAccounts: BankAccount[] = [];
  //endregion


  constructor() { 
    this.transactionForm = this.fb.group({
      transaction_type: [TransactionType.DEPOSIT, Validators.required],
      amount: [null, Validators.required],
      source_bank_account_id: [null],
      target_bank_account_id: [null],
      description: [null, Validators.maxLength(20)],
    });
  }

  public ngOnInit(): void {
    this.bankAccountService.getBankAccounts().subscribe((bankAccounts) => {
      this.bankAccounts = bankAccounts;
    });
  }

  private onSubmit(): void {

  }

  private onReset(): void {}

  private onCancel(): void {} 
}
