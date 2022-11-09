import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorPageRoutingModule } from "./navigator-page-routing.module";
import { NavigatorPageComponent } from "./container/navigator-page.component";

@NgModule({
  declarations: [NavigatorPageComponent],
  imports: [CommonModule, NavigatorPageRoutingModule],
})
export class NavigatorPageModule {}
