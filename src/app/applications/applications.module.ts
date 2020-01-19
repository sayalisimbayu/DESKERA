import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FullCalendarModule } from 'ng-fullcalendar';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationsComponent } from './applications/applications.component';
import { InboxComponent } from './inbox/inbox.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { ComposeComponent } from './compose/compose.component';
import { AppChatComponent } from './app-chat/app-chat.component';
import { AppCalendarComponent } from './app-calendar/app-calendar.component';
import { AuthGuard } from '../services/auth/auth.service';

export const applicationRoutes: Routes = [
  {
    path: 'app-inbox',
    canActivate: [AuthGuard],
    children: [
        { path: '', pathMatch: 'full', component: InboxComponent, data: { title: ':: Lucid Angular :: App :: Inbox ::' },
        canActivate: [AuthGuard]},
        { path: 'compose', component: ComposeComponent, data: { title: ':: Lucid Angular :: App :: Compose ::' },
        canActivate: [AuthGuard]}
    ]
},
{ path: 'app-chat', component: AppChatComponent, data: { title: ':: Lucid Angular :: App :: Chat ::' },
canActivate: [AuthGuard]},
{ path: 'app-contact-grid', component: ContactGridComponent, data: { title: ':: Lucid Angular :: App :: Contacts ::' },
canActivate: [AuthGuard]},
{ path: 'app-calendar', component: AppCalendarComponent, data: { title: ':: Lucid Angular :: App :: Calendar ::' },
canActivate: [AuthGuard]},

]

@NgModule({
  declarations: [
    ApplicationsComponent,
    InboxComponent,
    ContactGridComponent,
    ComposeComponent,
    AppChatComponent,
    AppCalendarComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NgbModule,
    RichTextEditorAllModule,
    FullCalendarModule,
    RouterModule.forChild(applicationRoutes)
  ]
})
export class ApplicationsModule { }
