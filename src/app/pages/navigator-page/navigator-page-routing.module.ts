import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavigatorPageComponent } from "./container/navigator-page.component";

const routes: Routes = [{ path: "", component: NavigatorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigatorPageRoutingModule {}
