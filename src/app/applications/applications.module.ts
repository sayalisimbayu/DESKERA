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

export const applicationRoutes: Routes = [
  {
    path: 'app-inbox',
    children: [
        { path: '', pathMatch: 'full', component: InboxComponent, data: { title: ':: Lucid Angular :: App :: Inbox ::' }  },
        { path: 'compose', component: ComposeComponent, data: { title: ':: Lucid Angular :: App :: Compose ::' } }
    ]
},
{ path: 'app-chat', component: AppChatComponent, data: { title: ':: Lucid Angular :: App :: Chat ::' } },
{ path: 'app-contact-grid', component: ContactGridComponent, data: { title: ':: Lucid Angular :: App :: Contacts ::' } },
{ path: 'app-calendar', component: AppCalendarComponent, data: { title: ':: Lucid Angular :: App :: Calendar ::' } },

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
