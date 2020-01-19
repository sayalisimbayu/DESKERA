
export class AppPermission {
    id: number = 0;
    appuserid: number = 0;
    mode: string = '';
    alias: string = '';
    value: number = 0;
    appsettingid: number = 0;
    permission: number = 0;
    notificationid: number = 0;
}
export class User {
    fullName: string = '';
    email: string = '';
    displayname: string = '';
    username: string = '';
    id: number = 0;
    isdeleted: boolean = false;
    otp: string = '';
    password: string = '';
    permissions: AppPermission[];
    lastLoggin: string = '';
    confirmPassword: string = '';
    notificationid: number = 0;
}
export class RegisterUser {
    signUpEmail: string = '';
    signUpFullName: string = '';
    signUpPassword: string = '';
    signUpConfirmPassword: string = '';
}
