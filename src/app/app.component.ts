import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18nDemo';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'jp', label: '日本語' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}
