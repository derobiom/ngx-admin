import { Component } from '@angular/core';
import { AuthService} from '../../auth/auth.service';

@Component({
  selector: 'ngx-blank',
  template: ``,
})
export class BlankComponent {

  constructor(private auth: AuthService) {

  }

}
