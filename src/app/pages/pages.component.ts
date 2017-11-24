import { Component, ChangeDetectorRef } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { forEach } from '@angular/router/src/utils/collection';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu *ngIf="isAuthenticated" [items]="commonMenu"></nb-menu>
      <nb-menu *ngIf="writeUsers()" [items]="usersMenu" style="margin-top:20px;"></nb-menu>
      <nb-menu [items]="notauthmenu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

    isAuthenticated = false;
  //menu = MENU_ITEMS;

  commonMenu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      link: '/pages/dashboard',
      home: true,
      hidden: false,
      data: ""
    },
    {
      title: 'Reports',
      icon: 'nb-tables',
      link: '/pages/reports',
      home: true,
      hidden: false,
      data: ""
    },
  ];

  usersMenu: NbMenuItem[] = [
    {
      title: 'Users',
      icon: 'nb-person',
      link: '/pages/users',
      hidden: false,
      data: "write:users"
    },
  ];

  notauthmenu: NbMenuItem[] = [
  ];

  constructor(private auth:AuthService, private cdRef : ChangeDetectorRef){
    this.isAuthenticated = this.auth.isAuthenticated();   
  }

  ngAfterViewChecked() {
    let isAuthenticated = this.auth.isAuthenticated();
    if (isAuthenticated != this.isAuthenticated) { // check if it change, tell CD update view
      this.isAuthenticated = isAuthenticated;
      this.cdRef.detectChanges();
    }
  }

  writeUsers():boolean{
    if (this.auth.isAuthenticated())
    {
      if (this.auth.userHasScopes(["write:users"])){
        return true;
      }
      else return false;
    }
    else return false;
  }

}
