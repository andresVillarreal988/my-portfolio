import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PassionsComponent } from './pages/passions/passions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatButtonModule } from '@angular/material/button';
 import { MatIconModule } from '@angular/material/icon';
 import { MatCardModule } from '@angular/material/card';
import { CertificationsAndStudiesComponent } from './pages/certifications-and-studies/certifications-and-studies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    PassionsComponent,
    ContactComponent,
    NavbarComponent,
    CertificationsAndStudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
