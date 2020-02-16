import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { I18n } from '@data/schema/i18n';

import vi_VN from '@shared/i18n/vi_VN.json';
import en_US from '@shared/i18n/en_US.json';

const DEFAULT = 'en_US';
const LANGS: { [key: string]: I18n } = {
  vi_VN: {
    text: 'Tiếng Việt',
    code: 'vi_VN',
    render: vi_VN,
    abbr: '🇻🇳'
  },
  en_US: {
    text: 'English (US)',
    code: 'en_USs',
    render: en_US,
    abbr: '🇦🇺'
  }
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  // tslint:disable-next-line:variable-name
  private _default = DEFAULT;
  private change$ = new BehaviorSubject<string | null>(null);

  // tslint:disable-next-line:variable-name
  private _langs = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor(private translate: TranslateService) {
    const languages = this._langs.map(lang => lang.code);
    translate.addLangs(languages);

    const defaultLan = translate.getBrowserLang();
    if (languages.includes(defaultLan)) {
      this._default = defaultLan;
    }

    this.updateLangData(this._default);
  }

  private updateLangData(lang: string) {
    const item = LANGS[lang];
    registerLocaleData(item.render);
  }

  use(lang: string): void {
    lang = lang || this.translate.getDefaultLang();
    if (this.currentLang === lang) {
      return;
    } else {
      this.updateLangData(lang);
      this.translate.use(lang).subscribe(() => this.change$.next(lang));
    }
  }

  get change(): Observable<string> {
    return this.change$
      .asObservable()
      .pipe(filter(w => w != null)) as Observable<string>;
  }

  get langs() {
    return this._langs;
  }

  get defaultLang() {
    return this._default;
  }

  get currentLang() {
    return (
      this.translate.currentLang ||
      this.translate.getDefaultLang() ||
      this._default
    );
  }
}
