import { Component } from '@angular/core';
import { ThemeService } from './services/theme-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Users Catalog';

  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    themeService.getTheme();
    this.isDarkMode = themeService.isDarkMode();

  }


  // Toggle the theme between light and dark modes


  public toggleTheme(): void {
    const theme = this.themeService._theme$.value === 'light-mode' ? 'dark-mode' : 'light-mode';
    this.themeService.setTheme(theme);
    this.themeService.applyTheme(theme);
  }
}
