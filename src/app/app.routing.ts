import { Routes, RouterModule, ExtraOptions, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full'},
    { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
    { path: 'authentication', loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule) }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
const config: ExtraOptions = {
    useHash: false,
  };

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule implements CanActivate {
    constructor(private router: Router, private authsrv: AuthService) {
  
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authsrv.isLoggedOut()) {
        this.router.navigate(['/authentication/page-login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
      return true;
    }
  }