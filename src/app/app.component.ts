import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { LoaderService } from "./services/loader-service/loader.service";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  showLoader = false;

  title = "HRMS";
  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.listenRouterEvents();
    this.loaderService.loading$.subscribe((data) => {
      setTimeout(() => {
        this.showLoader = false;
      }, 0);
    });
  }

  listenRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);
      }
    });
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}
