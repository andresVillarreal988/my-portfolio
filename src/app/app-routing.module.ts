// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PassionsComponent } from './pages/passions/passions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertificationsAndStudiesComponent } from './pages/certifications-and-studies/certifications-and-studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'passions', component: PassionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'certifications-and-studies', component: CertificationsAndStudiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
