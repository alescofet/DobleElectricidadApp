import { AuthService } from '../../auth/auth.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private translate: TranslateService, private authService: AuthService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  logout(){
    this.authService.logout()
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }
}
