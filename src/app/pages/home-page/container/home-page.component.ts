import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { TransactionService, TransactionTypes } from "src/app/services/transaction.service";
import { Transaction } from "src/app/types/transaction.interface";

@Component({
  selector: "sft-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private transactionService: TransactionService) {}

  allTransactions: number = 0;
  incomeTransactions: number = 0;
  outcomeTransactions: number = 0;
  loanTransactions: number = 0;
  investmentTransactions: number = 0;

  allTransactionsSubscriptions: Subscription = new Subscription();
  incomeTransactionsSubscriptions: Subscription = new Subscription();
  outcomeTransactionsSubscriptions: Subscription = new Subscription();
  loanTransactionsSubscriptions: Subscription = new Subscription();
  investmentTransactionsSubscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.allTransactionsSubscriptions = this.transactionService
      .getTransactions(TransactionTypes.ALL)
      .subscribe((transactions: Transaction[]) => (this.allTransactions = transactions.length));

    this.incomeTransactionsSubscriptions = this.transactionService
      .getTransactions(TransactionTypes.INCOME)
      .subscribe((transactions: Transaction[]) => (this.incomeTransactions = transactions.length));

    this.outcomeTransactionsSubscriptions = this.transactionService
      .getTransactions(TransactionTypes.OUTCOME)
      .subscribe((transactions: Transaction[]) => (this.outcomeTransactions = transactions.length));

    this.loanTransactionsSubscriptions = this.transactionService
      .getTransactions(TransactionTypes.LOAN)
      .subscribe((transactions: Transaction[]) => (this.loanTransactions = transactions.length));

    this.investmentTransactionsSubscriptions = this.transactionService
      .getTransactions(TransactionTypes.INVESTMENT)
      .subscribe(
        (transactions: Transaction[]) => (this.investmentTransactions = transactions.length),
      );
  }

  ngOnDestroy(): void {
    this.allTransactionsSubscriptions.unsubscribe();
    this.incomeTransactionsSubscriptions.unsubscribe();
    this.outcomeTransactionsSubscriptions.unsubscribe();
    this.loanTransactionsSubscriptions.unsubscribe();
    this.investmentTransactionsSubscriptions.unsubscribe();
  }
}
