import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Auth } from '../../models/auth.model';

@Component({
	selector: 'app-page-login',
	templateUrl: './page-login.component.html',
	styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
	public user: Auth = new Auth();
	constructor(
		private router: Router,
		private authSvc: AuthService) { }

	ngOnInit() {
	}

	onSubmit() {
		// this.router.navigate(['/admin/dashboard/index']);
		if (!this.authSvc.isLoggedIn()) {
            this.authSvc.login(this.user).subscribe(items => {
                console.info(items);
                if (this.authSvc.isLoggedIn()) {
                    // this.getPermissions(this.user.email).subscribe(permissions => {
                    //     this.router.navigate([this.returnUrl]);
                    // });
                }
            }, (error => {
                if (error.status === 401) {
                    // this.errors.push('Invalid Credentials.');
                    // this.showMessages = { error: this.errors, message: this.messages };
                } else {
                    // this.errors.push(error.message);
                    // this.showMessages = { error: this.errors, message: this.messages };
                }
            }));
        }
	}
}
