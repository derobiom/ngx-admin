import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

import { LoginModule } from './login/login.module'
import { LogoutModule } from './logout/logout.module'
import { BlankModule } from './blank/blank.module'
import { UsersModule } from './users/users.module'

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    LoginModule,
    LogoutModule,
    BlankModule,
    UsersModule 
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
