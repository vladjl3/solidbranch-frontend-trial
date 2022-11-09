import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorPageRoutingModule } from "./navigator-page-routing.module";
import { NavigatorPageComponent } from "./container/navigator-page.component";
import { TransactionTableComponent } from "./components/table/transaction-table.component";
import { TableTogglerComponent } from './components/table-toggler/table-toggler.component';

@NgModule({
  declarations: [NavigatorPageComponent, TransactionTableComponent, TableTogglerComponent],
  imports: [CommonModule, NavigatorPageRoutingModule],
})
export class NavigatorPageModule {}
