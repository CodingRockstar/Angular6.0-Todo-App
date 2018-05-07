// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyCiOYShIbgV97obBujzew-iKWB9Tel9NOI",
      authDomain: "angular2-test-ac60c.firebaseapp.com",
      databaseURL: "https://angular2-test-ac60c.firebaseio.com",
      projectId: "angular2-test-ac60c",
      storageBucket: "angular2-test-ac60c.appspot.com",
      messagingSenderId: "770811400594"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
