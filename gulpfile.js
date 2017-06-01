var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var rimraf = require('rimraf');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');
var replace = require('gulp-replace');
var plumber = require('gulp-plumber');


gulp.task('default', ['system']);

gulp.task('system', ['system:node', 'system:angularfire2','tsc'], function () {
    gulp.src('src/indexsystem.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));

    gulp.src('src/system.config.js')
        .pipe(gulp.dest('dist'));
    

    gulp.src(['src/**/*.css'])
        .pipe(gulp.dest('dist/out-tsc/src'));

    gulp.src(['src/**/*.html', '!src/index.html','!src/indexsystem.html'])
        .pipe(gulp.dest('dist/out-tsc/src'));

});


gulp.task('tsc', ['cleanup'], function(done){
    var tsProject = ts.createProject('tsconfig.json', { module: 'commonjs' });
    tsProject.src()
        .pipe(tsProject())
        .pipe(replace('core_1.Component({', 'core_1.Component({\nmoduleId: module.id,'))
        .pipe(gulp.dest('dist/out-tsc'));
    done();
})

gulp.task('system:angularfire2',['cleanup'], function(done){
    gulp.src('angularfire2bundles/*.js')
    .pipe(gulp.dest('dist/lib/angularfire2'));
    done();
});

gulp.task('cleanup', function (done) {
    rimraf('dist', (error) => {
        if (!error) {
            done();
        }
        else {
            console.log(error);
        }
    });
})

gulp.task('system:node', ['cleanup'], function(done){
var npm = 'node_modules/';
    var lib = 'dist/lib/';
    var src = [
        'core-js/client/shim.min.js',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'systemjs/dist/system.src.js',
        '@angular/animations/bundles/animations.umd.js',
        '@angular/animations/bundles/animations-browser.umd.js',
        '@angular/core/bundles/core.umd.js',
        '@angular/common/bundles/common.umd.js',
        '@angular/compiler/bundles/compiler.umd.js',
        '@angular/material/bundles/material.umd.js',
        '@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http/bundles/http.umd.js',
        '@angular/router/bundles/router.umd.js',
        '@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade/bundles/upgrade.umd.js',
        'rxjs/**',
        'firebase/firebase.js',
        'firebase/firebase-app.js',
        'firebase/firebase-database.js',
        'firebase/firebase-auth.js'

    ]

    for (var i = 0; i < src.length; i++) {
        var dest = src[i].substring(0, src[i].lastIndexOf('/'));
        gulp.src(npm + src[i])
            .pipe(gulp.dest(lib + dest));
    }
    done();
})