import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "sft-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor() {}
}
