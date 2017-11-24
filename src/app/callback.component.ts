import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  template: `
  `,
})
export class CallbackComponent {

  constructor(private auth: AuthService, private router: Router ) {

   }

}
