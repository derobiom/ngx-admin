import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

import { AuthService } from '../../../auth/auth.service';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  public isAuthenticated = false;
  public username: string = "unknown";
  public notAuthMenu = [{ title: 'Login', link: 'login' }];
  public authMenu = [{ title: 'Profile', link: 'profile' }, { title: 'Log out', link: 'logout' }];
  requestedScopes: string = 'openid profile read:messages write:messages';
  auth0 = new auth0.WebAuth({
    clientID: environment.clientID,
    domain: environment.domain,
    responseType: 'token id_token',
    audience: environment.apiUrl,
    redirectUri: environment.callbackURL,
    scope: this.requestedScopes,
    leeway: 30
  });

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private auth: AuthService,
              private cdRef : ChangeDetectorRef) { 
                this.isAuthenticated = this.auth.isAuthenticated();
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    let isAuthenticated = this.auth.isAuthenticated();
    if (isAuthenticated != this.isAuthenticated) { // check if it change, tell CD update view
      this.isAuthenticated = isAuthenticated;
      this.cdRef.detectChanges();
    }
  }

  ngAfterViewInit() {
    if (this.auth.isAuthenticated())
    {
      const accessToken = localStorage.getItem('access_token');
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          this.username = profile.nickname;
        }
        else {
          console.log("header failed to retrieve auth0 profile.");
          return null;
        }
      });
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
