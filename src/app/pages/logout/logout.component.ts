import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth/auth.service';

@Component({
  selector: 'ngx-login',
  template: `Logged out.  Good bye.`,
})
export class LogoutComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(){
    this.auth.logout();
  }
}
