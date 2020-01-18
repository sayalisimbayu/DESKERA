import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageBlankComponent } from "./page-blank/page-blank.component";
import { PageProfileComponent } from "./page-profile/page-profile.component";
import { PageProfileV2Component } from "./page-profile-v2/page-profile-v2.component";
import { PageGalleryComponent } from "./page-gallery/page-gallery.component";
import { PageTimelineComponent } from "./page-timeline/page-timeline.component";
import { PagePricingComponent } from "./page-pricing/page-pricing.component";
import { PageInvoicesComponent } from "./page-invoices/page-invoices.component";
import { PageInvoicesV2Component } from "./page-invoices-v2/page-invoices-v2.component";
import { PageSearchResultsComponent } from "./page-search-results/page-search-results.component";
import { PageHelperClassComponent } from "./page-helper-class/page-helper-class.component";
import { PageTeamsBoardComponent } from "./page-teams-board/page-teams-board.component";
import { PageProjectsListComponent } from "./page-projects-list/page-projects-list.component";
import { PageTestimonialsComponent } from "./page-testimonials/page-testimonials.component";
import { PageFaqComponent } from "./page-faq/page-faq.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageMaintananceComponent } from "./page-maintanance/page-maintanance.component";
import { RouterModule, Routes } from '@angular/router';
import { NgxEchartsModule } from "ngx-echarts";
import { CommonElementsModule } from "../common-elements/common-elements.module";
import { NgxGalleryModule } from "ngx-gallery";

export const routes: Routes = [
	{ path: '', redirectTo: 'page-blank', pathMatch: 'full' },
	{ path: 'page-blank', component: PageBlankComponent, data: { title: ':: Lucid Angular :: Pages :: Blank ::' }  },
	{ path: 'page-profile', component: PageProfileComponent, data: { title: ':: Lucid Angular :: Pages :: Profile ::' } },
	{ path: 'page-profile2', component: PageProfileV2Component, data: { title: ':: Lucid Angular :: Pages :: Profile - V2 ::' } },
	{ path: 'page-gallery', component: PageGalleryComponent, data: { title: ':: Lucid Angular :: Pages :: Gallery ::' } },
	{ path: 'page-timeline', component: PageTimelineComponent, data: { title: ':: Lucid Angular :: Pages :: Timeline ::' } },
	{ path: 'page-pricing', component: PagePricingComponent, data: { title: ':: Lucid Angular :: Pages :: Pricing ::' } },
	{ path: 'page-invoices', component: PageInvoicesComponent, data: { title: ':: Lucid Angular :: Pages :: Invoices ::' } },
	{ path: 'page-invoices2', component: PageInvoicesV2Component, data: { title: ':: Lucid Angular :: Pages :: Invoices - V2 ::' } },
	{ path: 'page-search-results', component: PageSearchResultsComponent, data: { title: ':: Lucid Angular :: Pages :: Search Results ::' } },
	{ path: 'page-helper-class', component: PageHelperClassComponent, data: { title: ':: Lucid Angular :: Pages :: Classes ::' } },
	{ path: 'page-teams-board', component: PageTeamsBoardComponent, data: { title: ':: Lucid Angular :: Pages :: Team ::' } },
	{ path: 'page-projects-list', component: PageProjectsListComponent, data: { title: ':: Lucid Angular :: Pages :: Projects ::' } },
	{ path: 'page-maintenance', component: PageProjectsListComponent, data: { title: ':: Lucid Angular :: Pages :: Maintenance ::' } },
	{ path: 'page-testimonials', component: PageTestimonialsComponent, data: { title: ':: Lucid Angular :: Pages :: Testimonials ::' } },
	{ path: 'page-faq', component: PageFaqComponent, data: { title: ':: Lucid Angular :: Pages :: Faq ::' } },
];

@NgModule({
  declarations: [
    PageBlankComponent,
    PageProfileComponent,
    PageProfileV2Component,
    PageGalleryComponent,
    PageTimelineComponent,
    PagePricingComponent,
    PageInvoicesComponent,
    PageInvoicesV2Component,
    PageSearchResultsComponent,
    PageHelperClassComponent,
    PageTeamsBoardComponent,
    PageProjectsListComponent,
    PageTestimonialsComponent,
    PageFaqComponent,
    PageMaintananceComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    NgxEchartsModule,
    CommonElementsModule,
    NgxGalleryModule,
		RouterModule.forChild(routes)
  ],
  exports: []
})
export class PagesModule {}
