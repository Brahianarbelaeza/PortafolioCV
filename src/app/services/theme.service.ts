import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();

  toggleTheme(): void {
    const current = this.darkMode.value;
    this.darkMode.next(!current);
  }

  setDarkMode(value: boolean): void {
    this.darkMode.next(value);
  }
}
