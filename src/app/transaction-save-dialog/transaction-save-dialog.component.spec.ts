import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSaveDialogComponent } from './transaction-save-dialog.component';

describe('TransactionSaveDialogComponent', () => {
  let component: TransactionSaveDialogComponent;
  let fixture: ComponentFixture<TransactionSaveDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionSaveDialogComponent]
    });
    fixture = TestBed.createComponent(TransactionSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
