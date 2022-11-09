import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <sft-header></sft-header>
    <router-outlet></router-outlet>
    <sft-footer class="footer mt-auto py-3 my-4"></sft-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "solidbranch-frontend-trial";
}
