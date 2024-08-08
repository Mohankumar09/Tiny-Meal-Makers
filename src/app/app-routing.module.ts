import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'package', component: PackageComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'contact-us', component: ContactUsComponent }, 
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
