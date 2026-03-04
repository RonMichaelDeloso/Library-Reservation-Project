import { Routes } from '@angular/router';
import { LoginComponent } from './Logins/login.component';
import { SignupComponent } from './Sign up/signup.component';
import { ForgotpasswordComponent} from './ForgotPassword/forgotpassword.component'

export const routes: Routes = [
    {path: 'login', component:LoginComponent },
    {path: 'signup', component:SignupComponent},
    {path: 'forgotpassword', component:ForgotpasswordComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];
