import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeColorService {

  private colorTheme: string;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  isDarkMode(): boolean {
    return this.colorTheme === 'dark-mode';
  }


  private setTheme(theme: 'light-mode'| 'dark-mode'): void {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  getTheme(): void {
    if(localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme')!;
    }
    else {
      this.colorTheme = 'light-mode';
    }
  }

  updateTheme(theme: 'light-mode' | 'dark-mode'): void {
    this.setTheme(theme);
    const previousTheme = (theme === 'light-mode' ? 'dark-mode': 'light-mode');
    this.renderer.removeClass(document.body, previousTheme);
    this.renderer.addClass(document.body, theme);
  }
}

