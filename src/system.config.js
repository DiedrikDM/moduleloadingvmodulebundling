/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'lib/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      '': 'out-tsc/src',
      app: 'out-tsc/src/app',
      'shared' : 'out-tsc/src/shared',
      'beers' : 'out-tsc/src/beers',
      'environments' : 'out-tsc/src/environments',
      'overview' : 'out-tsc/src/overview',
      'secrets' : 'out-tsc/src/secrets',
      'users' : 'out-tsc/src/users',
      // angular bundles
      '@angular/animations' : 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser' : 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/material':'npm:@angular/material/bundles/material.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angularfire2' : 'npm:angularfire2/angularfire2-all.umd.js',
      'angularfire2/database' : 'npm:angularfire2/angularfire2-all.umd.js',
      'angularfire2/auth' : 'npm:angularfire2/angularfire2-all.umd.js',
      'firebase': 'npm:firebase/firebase.js',
      'firebase/app': 'npm:firebase/firebase.js',
      'firebase/database': 'npm:firebase/firebase.js',
      'firebase/auth': 'npm:firebase/firebase.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      '': {
        main: 'out-tsc/src/main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
