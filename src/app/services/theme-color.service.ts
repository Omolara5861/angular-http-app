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

    /** This method calls @getTheme() to retrieve the current theme, then adds that theme to the body element of the DOM */
  initTheme() {
    this.getTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  /** This method returns a boolean based on whether the current theme is 'dark-mode' */
  isDarkMode(): boolean {
    return this.colorTheme === 'dark-mode';
  }

 /** The setTheme() method sets the colorTheme variable to the passed-in theme, and stores the theme in local storage using @localStorage.setItem(). */
  private setTheme(theme: 'light-mode'| 'dark-mode'): void {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  /** The getTheme() method retrieves the theme from local storage using localStorage.getItem(), and sets colorTheme to the retrieved value. If no theme is found in local storage, it defaults to 'light-mode'. */
  getTheme(): void {
    if(localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme')!;
    }
    else {
      this.colorTheme = 'light-mode';
    }
  }

  /** The updateTheme() method calls setTheme() to update the theme in both colorTheme and local storage, then removes the previous theme class from the body using renderer.removeClass(), and adds the new theme class using renderer.addClass(). */

  updateTheme(theme: 'light-mode' | 'dark-mode'): void {
    this.setTheme(theme);
    const previousTheme = (theme === 'light-mode' ? 'dark-mode': 'light-mode');
    this.renderer.removeClass(document.body, previousTheme);
    this.renderer.addClass(document.body, theme);
  }
}

