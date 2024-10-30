import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Simula autenticación con un usuario y password mockeadas, debería hacer uso de Auth0 o JWT para asegurar el login
    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    //Borra el "logueo" del sessionStorage y devuelve al usuario al login
    sessionStorage.removeItem('isAuthenticated');
    this.router.navigate([""])
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('isAuthenticated');
  }
}
