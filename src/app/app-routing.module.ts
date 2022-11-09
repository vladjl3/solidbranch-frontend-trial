import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "navigator",
    loadChildren: () => import("./pages/navigator/navigator.module").then((m) => m.NavigatorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
