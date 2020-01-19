import { Injectable } from "@angular/core";
import { User, RegisterUser } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { DataResponse } from '../../models/data-response.model';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()

export class PageRegisterService {
    public date = moment();
    constructor(
        protected http: HttpClient
        ) {}

    saveUser(newUser: User): Observable<DataResponse> {
            newUser.notificationid = 0;
            return this.http.post<DataResponse>('User/', newUser);
    }

    getNewUser(newUser: RegisterUser): User {
        return <User>{
            displayname: newUser.signUpFullName,
            username: newUser.signUpEmail,
            id: 0,
            isdeleted: false,
            otp: '',
            password: newUser.signUpPassword,
            permissions: [],
            lastLoggin: this.date.format('MM/DD/YYYY'),
        };
    }
}