import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/frontend-components/login/login.component';
import { RegisterComponent } from 'src/app/frontend-components/register/register.component';
import { BrowseComponent } from 'src/app/frontend-components/browse/browse.component';
import { PetProfileComponent } from './frontend-components/pet-profile/pet-profile.component';
import { PrimaryNavbarComponent } from './frontend-components/primary-navbar/primary-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    PrimaryNavbarComponent,
    RegisterComponent,
    LoginComponent,
    PetProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
