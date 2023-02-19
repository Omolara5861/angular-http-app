import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Create a BehaviorSubject to store and update the theme
  readonly _theme$: BehaviorSubject<string> = new BehaviorSubject<string>('light-mode');
  // Expose the theme as an observable
  public readonly theme$ = this._theme$.asObservable();

  constructor() {
    // Get the current theme from local storage on initialization
    this.getTheme();
  }

  isDarkMode(): boolean {
    return this._theme$.value === 'dark-mode';
  }

  // Set the theme and update it in local storage and the BehaviorSubject
  setTheme(theme: string): void {
    try {
      localStorage.setItem('user-theme', theme);
      this._theme$.next(theme);
    } catch (error) {
      console.error(`Failed to set theme: ${error}`);
    }
  }

  // Get the theme from local storage and update the BehaviorSubject
  getTheme(): void {
    try {
      const theme = localStorage.getItem('user-theme') ?? 'light-mode';
      this._theme$.next(theme);
    } catch (error) {
      console.error(`Failed to get theme: ${error}`);
    }
  }

  applyTheme(theme: string): void {
    if (theme === 'dark-mode') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}

