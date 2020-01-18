import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { LazyLoaderService } from "../../services/lazy-loader.service";

@Component({
  selector: "app-page-frame",
  templateUrl: "./page-frame.component.html",
  styleUrls: ["./page-frame.component.css"]
})
export class PageFrameComponent implements OnInit, AfterViewInit {
  @ViewChild("pagetitle", { read: ViewContainerRef, static: false })
  pageTitle: ViewContainerRef;
  @ViewChild("pagebody", { read: ViewContainerRef, static: false })
  pageBody: ViewContainerRef;
  constructor(
    private cdr: ChangeDetectorRef,
    private lazyLoader: LazyLoaderService
  ) {}
  ngAfterViewInit(): void {
    this.pageTitle.clear();
    this.lazyLoader.load("page-title", this.pageTitle, () => {
      this.cdr.detectChanges();
    });
    this.pageBody.clear();
    this.lazyLoader.load("page-header-chart", this.pageBody, () => {
        this.cdr.detectChanges();
      });
  }
  ngOnInit() {}
}
