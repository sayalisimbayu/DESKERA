import { NgModule, ApplicationModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index/index.component";
import { routing } from "./admin.routing";
import { NgxEchartsModule } from "ngx-echarts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AdminComponent } from "./admin/admin.component";
import { DetailTilesComponent } from "./detail-tiles/detail-tiles.component";
import { CardActionsComponent } from "./card-actions/card-actions.component";
import { TimelinePostComponent } from "./timeline-post/timeline-post.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ChatComponent } from "./chat/chat.component";
import { GeneralFeedComponent } from "./general-feed/general-feed.component";
import { TwitterFeedComponent } from "./twitter-feed/twitter-feed.component";
import { MemberInfoComponent } from "./member-info/member-info.component";
import { ManagedDataComponent } from "./managed-data/managed-data.component";
import { TopProductsComponent } from "./top-products/top-products.component";
import { ReferralsComponent } from "./referrals/referrals.component";
import { TotalRevenueComponent } from "./total-revenue/total-revenue.component";
import { PagesModule } from "../pages/pages.module";
import { RouterModule } from "@angular/router";
import { CommonElementsModule } from "../common-elements/common-elements.module";
import { LayoutModule } from "../layout/layout.module";
import { IotDashboardComponent } from "./iot-dashboard/iot-dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgxEchartsModule,
    LayoutModule,
    NgbModule,
    PagesModule,
    RouterModule,
    CommonElementsModule,
  ],
  declarations: [
    AdminComponent,
    IndexComponent,
    DetailTilesComponent,
    CardActionsComponent,
    TimelinePostComponent,
    ActivitiesComponent,
    ChatComponent,
    GeneralFeedComponent,
    TwitterFeedComponent,
    MemberInfoComponent,
    ManagedDataComponent,
    TopProductsComponent,
    ReferralsComponent,
    TotalRevenueComponent,
    IotDashboardComponent
  ],
})
export class AdminModule {}
