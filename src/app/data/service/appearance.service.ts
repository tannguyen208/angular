import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Theme } from '@data/schema/theme';
import * as themesShared from '@shared/themes';

const THEMES = [
  '_default',
  'noir',
  'green',
  'blue',
  'warm',
  'rust',
  'midnight',
  'superBlack',
];
const TOOLBARS = ['left', 'top'];

@Injectable({ providedIn: 'root' })
export class AppearanceService {
  theme$: BehaviorSubject<string>;
  toolbar$: BehaviorSubject<string>;

  constructor() {
    this.theme$ = new BehaviorSubject<string>(null);
    this.toolbar$ = new BehaviorSubject<string>(null);
  }

  public setupTheme(): void {
    let theme = localStorage.getItem('theme$');
    if (!theme) {
      theme = THEMES[0];
    }

    this.changeTheme(theme);
  }

  public setupToolbar(): void {
    let toolbar = localStorage.getItem('toolbar$');
    if (!toolbar) {
      toolbar = TOOLBARS[0];
    }

    this.changeToolbar(toolbar);
  }

  public changeTheme(theme: string) {
    const style = document.documentElement.style;
    themesShared[theme].forEach(({ key, value }: Theme) => {
      style.setProperty(key, value);
    });

    // save behavior
    this.theme$.next(theme);
    // save on local storage
    localStorage.setItem('theme$', theme);
  }

  public changeToolbar(toolbar: string) {
    // save behavior
    this.toolbar$.next(toolbar);
    // save on local storage
    localStorage.setItem('toolbar$', toolbar);
  }
}
