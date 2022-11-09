import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Transaction } from "src/app/types/transaction.interface";

@Component({
  selector: "sft-transaction-table",
  templateUrl: "./transaction-table.component.html",
  styleUrls: ["./transaction-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionTableComponent {
  constructor() {}
  @Input("items") itemsProps: Transaction[] = [];
}
