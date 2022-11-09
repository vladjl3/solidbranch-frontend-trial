import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorPageRoutingModule } from "./navigator-page-routing.module";
import { NavigatorPageComponent } from "./container/navigator-page.component";
import { TransactionTableComponent } from "./components/table/transaction-table.component";

@NgModule({
  declarations: [NavigatorPageComponent, TransactionTableComponent],
  imports: [CommonModule, NavigatorPageRoutingModule],
})
export class NavigatorPageModule {}
