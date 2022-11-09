import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomePageComponent } from "./container/home-page.component";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
