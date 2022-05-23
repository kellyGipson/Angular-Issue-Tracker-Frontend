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
    path: 'task-tracker',
    component: DashboardComponent,
  },
  {
    path: 'task-tracker/login',
    component: LoginComponent,
  },
  {
    path: 'task-tracker/register',
    component: RegisterComponent,
  },
  {
    path: 'task-tracker/issues',
    component: IssuesComponent,
  },
  {
    path: 'task-tracker/group',
    component: GroupComponent,
  },
  {
    path: 'task-tracker/profile',
    component: ProfileComponent,
  },
  {
    path: '',
    redirectTo: '/task-tracker',
    pathMatch: 'full',
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
