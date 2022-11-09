import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { paths } from "src/app/app-paths";

@Component({
  selector: "sft-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor() {}

  paths = paths;

  menuItems = [
    { title: "Home", link: paths.home },
    { title: "Navigator", link: paths.navigator },
  ];
}
