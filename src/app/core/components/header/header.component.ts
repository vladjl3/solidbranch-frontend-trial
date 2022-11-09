import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "sft-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor() {}
}
