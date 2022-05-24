import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { GroupComponent } from './core/group/group.component';
import { IssuesComponent } from './core/issues/issues.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProfileComponent } from './core/profile/profile.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/issue-tracker',
    pathMatch: 'full',
  },
  {
    path: 'issue-tracker',
    component: DashboardComponent,
  },
  {
    path: 'issue-tracker/login',
    component: LoginComponent,
  },
  {
    path: 'issue-tracker/register',
    component: RegisterComponent,
  },
  {
    path: 'issue-tracker/issues',
    component: IssuesComponent,
  },
  {
    path: 'issue-tracker/group',
    component: GroupComponent,
  },
  {
    path: 'issue-tracker/profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
