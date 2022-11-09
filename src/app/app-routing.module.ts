import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "navigator",
    loadChildren: () =>
      import("./pages/navigator-page/navigator-page.module").then((m) => m.NavigatorPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
