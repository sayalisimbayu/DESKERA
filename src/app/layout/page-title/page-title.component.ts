import {
  OnInit,
  ChangeDetectorRef,
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  AfterViewInit
} from "@angular/core";
import { SidebarService } from "../../services/sidebar.service";
import { LazyLoaderService } from "../../services/lazy-loader.service";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitleComponent implements OnInit, AfterViewInit {
  public sidebarVisible: boolean = true;
  @ViewChild("container", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  @Input() storeId: string;
  @Input() scope: any;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private lazyLoader: LazyLoaderService
  ) {}
  ngAfterViewInit(): void {
    this.container.clear();
    this.lazyLoader.load("page-header-chart", this.container, () => {
      this.cdr.detectChanges();
    });
  }
  ngOnInit(): void {}
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
}
