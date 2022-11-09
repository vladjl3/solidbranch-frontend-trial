import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Tab } from "../../types/tab.interface";

@Component({
  selector: "sft-table-toggler",
  templateUrl: "./table-toggler.component.html",
  styleUrls: ["./table-toggler.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTogglerComponent {
  constructor() {}
  @Input("tabs") tabsProps: Tab[] = [];
}
