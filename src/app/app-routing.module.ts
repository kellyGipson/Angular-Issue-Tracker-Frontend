import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { GroupComponent } from './core/group/group.component';
import { IssuesComponent } from './core/issues/issues.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProfileComponent } from './core/profile/profile.component';
import { RegisterComponent } from './core/register/register.component';
import { AddIssueComponent } from './core/add-issue/add-issue.component';
import { AddGroupComponent } from './core/add-group/add-group.component';
import { IssueDetailsComponent } from './core/issues/components/issue-details/issue-details.component';

const routes: Routes = [
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
    path: 'issue-tracker/issues/add',
    component: AddIssueComponent,
  },
  {
    path: 'issue-tracker/issues/:id',
    component: IssueDetailsComponent,
  },
  {
    path: 'issue-tracker/group',
    component: GroupComponent,
  },
  {
    path: 'issue-tracker/group/add',
    component: AddGroupComponent,
  },
  {
    path: 'issue-tracker/profile',
    component: ProfileComponent,
  },
  {
    path: 'issue-tracker/**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
