import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { TransactionService } from "src/app/services/transaction.service";
import { Transaction } from "src/app/types/transaction.interface";

@Component({
  selector: "sft-navigator-page",
  templateUrl: "./navigator-page.component.html",
  styleUrls: ["./navigator-page.component.scss"],
})
export class NavigatorPageComponent implements OnInit, OnDestroy {
  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {}

  transactions: Transaction[] = [];
  transactionSubscription: Subscription = new Subscription();
  queryParamsSubscription: Subscription = new Subscription();
  currentTab: number = 0;

  tabs = ["all", "income", "outcome", "loan", "investment"];

  ngOnInit(): void {
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.transactionSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentTab = Number(params["tab"] || "0");
      console.log("currentTab", this.currentTab);
      this.fetchTransactions(this.tabs[this.currentTab]);
    });
  }

  private fetchTransactions(type: string) {
    this.transactionSubscription = this.transactionService
      .getTransactions(type)
      .subscribe((transactions) => {
        this.transactions = transactions;
        transactions.forEach((item) => console.log("transaction", item.type));
      });
  }
}
