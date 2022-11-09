import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorRoutingModule } from "./navigator-routing.module";
import { NavigatorComponent } from "./container/navigator.component";

@NgModule({
  declarations: [NavigatorComponent],
  imports: [CommonModule, NavigatorRoutingModule],
})
export class NavigatorModule {}
