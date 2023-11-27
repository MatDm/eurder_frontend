/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes'
import {appConfig} from "./app/app.config";
import {provideHttpClient} from "@angular/common/http";
bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient()]
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
