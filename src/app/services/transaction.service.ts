import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { Transaction } from "../types/transaction.interface";

export enum TransactionTypes {
  ALL = "all",
  INCOME = "income",
  OUTCOME = "outcome",
  LOAN = "loan",
  INVESTMENT = "investment",
}

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  TRANSACTIONS_URL = "api/transactions";

  public getTransactions(type: string): Observable<Transaction[]> {
    let url = this.TRANSACTIONS_URL;
    if (type !== "all") {
      url = `${this.TRANSACTIONS_URL}?type=${type}`;
    }
    return this.http
      .get<Transaction[]>(url)
      .pipe(catchError(this.handleError<Transaction[]>("getTransactions", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
