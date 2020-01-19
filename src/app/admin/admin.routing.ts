import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { AuthGuard } from '../services/auth/auth.service';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard'},
            {
                path: 'dashboard',
                canActivate: [AuthGuard],
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full', canActivate: [AuthGuard], },
                    { path: 'index', component: IndexComponent, data: { title: ':: Lucid Angular :: Dashboard :: Analytical ::' },
                    canActivate: [AuthGuard],},
                    { path: 'iot', component: IotDashboardComponent, data: { title: ':: Lucid Angular :: Dashboard :: IoT ::' },
                    canActivate: [AuthGuard]},
                ]
            },
            {
                path: 'app',
                loadChildren: () => import('../applications/applications.module').then((m) => m.ApplicationsModule),
                canActivate: [AuthGuard],
            },
            {
                path: 'file-manager',
                loadChildren: () => import('../file-manager/file-manager.module').then((m) => m.FileManagerModule),
                canActivate: [AuthGuard],
            },
            {
                path: 'pages',
                loadChildren: () => import('../pages/pages.module').then((m) => m.PagesModule),
                canActivate: [AuthGuard],
            },
        ]
    },
];

export const routing = RouterModule.forChild(routes);