import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { NavItemComponent } from './shared/nav-menu/components/nav-item/nav-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { RegisterComponent } from './core/register/register.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { IssuesComponent } from './core/dashboard/components/issues/issues.component';
import { GroupComponent } from './core/dashboard/components/group/group.component';
import { ProfileComponent } from './core/dashboard/components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavItemComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    NotFoundComponent,
    IssuesComponent,
    GroupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
