import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageRegisterService } from './page-register.service';
import { DataResponse } from '../../models/data-response.model';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
    styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {
    
    public newUser: User = new User();
    public submitted: boolean = false;
    constructor(private router: Router,
        private pageRegisterSvc: PageRegisterService) { }

    ngOnInit() {
    }

    onSubmit(registrationForm: NgForm) {
        this.newUser = this.pageRegisterSvc.getNewUser(registrationForm.form.value);
        this.pageRegisterSvc.saveUser(this.newUser).subscribe((response: DataResponse) => {
            if (response.code === 1) {
                this.submitted = true;
                this.router.navigate(['/authentication/page-login']);
            }
        });
    }

}
