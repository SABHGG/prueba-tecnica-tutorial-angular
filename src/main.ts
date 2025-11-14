/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import routerConfig from "./app/routes";
import { App } from "./app/app";

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routerConfig)],
}).catch((err) => console.error(err));
