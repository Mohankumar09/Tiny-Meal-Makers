import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { PackageComponent } from './package/package.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; // Import HttpClientModule for API requests
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApiService } from './services/api.service'; 




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrderComponent,
    DeliveryComponent,
    PackageComponent,
    OrderHistoryComponent,
    LoginComponent,
    SignupComponent,
    TermsAndConditionsComponent,
    RefundPolicyComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    AboutUsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Include FormsModule here
    HttpClientModule,// Include HttpClientModule here
    FontAwesomeModule 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faEye, faEyeSlash);
  }
}
