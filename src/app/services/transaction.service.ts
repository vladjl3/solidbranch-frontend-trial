import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Transaction } from "../types/transaction.interface";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  TRANSACTIONS_URL = "api/transactions";

  public getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(this.TRANSACTIONS_URL)
      .pipe(catchError(this.handleError<Transaction[]>("getTransactions", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
