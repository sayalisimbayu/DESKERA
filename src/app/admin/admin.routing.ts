import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard'},
            {
                path: 'dashboard',
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: IndexComponent, data: { title: ':: Lucid Angular :: Dashboard :: Analytical ::' } },
                    { path: 'iot', component: IotDashboardComponent, data: { title: ':: Lucid Angular :: Dashboard :: IoT ::' } },
                ]
            },
            {
                path: 'app',
                loadChildren: () => import('../applications/applications.module').then((m) => m.ApplicationsModule)
            },
            {
                path: 'file-manager',
                loadChildren: () => import('../file-manager/file-manager.module').then((m) => m.FileManagerModule)
            },
            {
                path: 'pages',
                loadChildren: () => import('../pages/pages.module').then((m) => m.PagesModule)
            },
        ]
    },
];

export const routing = RouterModule.forChild(routes);