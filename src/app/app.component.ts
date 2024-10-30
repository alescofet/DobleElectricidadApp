import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DobleElectricidadApp';
  constructor(private translate: TranslateService) {
    // Establece el idioma predeterminado al cargar la aplicación
    this.translate.setDefaultLang('es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);  // Cambia el idioma para toda la aplicación
  }
}
