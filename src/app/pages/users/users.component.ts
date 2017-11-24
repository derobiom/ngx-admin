import { Component } from '@angular/core';
import { AuthService} from '../../auth/auth.service';

@Component({
  selector: 'ngx-blank',
  template: ``,
})
export class UsersComponent {

  constructor(private auth: AuthService){

  }

}
