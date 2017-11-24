import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuardService],
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule', canActivate: [AuthGuardService],
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule', canActivate: [AuthGuardService],
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule', canActivate: [AuthGuardService],
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule', canActivate: [AuthGuardService],
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule', canActivate: [AuthGuardService],
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule', canActivate: [AuthGuardService],
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule', canActivate: [AuthGuardService],
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'logout',
    component: LogoutComponent,
  }, {
    path: 'blank',
    component: BlankComponent,
  }, {
    path: 'users',
    component: UsersComponent,
  }, {
    path: '',
    component: BlankComponent,
  }, {
    path: '**',
    component: BlankComponent,
  },

],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
