import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './frontend-components/login/login.component';
import { RegisterComponent } from './frontend-components/register/register.component';
import { BrowseComponent } from './frontend-components/browse/browse.component';
import { PetProfileComponent } from './frontend-components/pet-profile/pet-profile.component';

const routes: Routes = [

  // Here is where everyone can add routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'pet-profile', component: PetProfileComponent },
  // default route
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  // 404 redirect
  { path: '**', redirectTo: '/browse' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
