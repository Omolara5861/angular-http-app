import { Component } from '@angular/core';
import { ThemeColorService } from './services/theme-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Users Catalog';

  isDarkMode: boolean;

  constructor(private themeColor: ThemeColorService) {
    themeColor.initTheme();
    this.isDarkMode = themeColor.isDarkMode();
  }

  onColorThemeChanged(): void {
    this.isDarkMode = this.themeColor.isDarkMode();
    this.isDarkMode
      ? this.themeColor.updateTheme('light-mode')
      : this.themeColor.updateTheme('dark-mode');
  }
}
