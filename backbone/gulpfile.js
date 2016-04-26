'use strict';

let gulp = require('gulp');
let runSequence = require('run-sequence');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

// default
gulp.task('default', ['build']);

// build
gulp.task('build', () => {
    runSequence(['work']);
});

// browserify
gulp.task('work', () => {
    browserify({
        entries: ['./work/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./work/scripts/'));
});

gulp.task('kadai1', () => {
    browserify({
        entries: ['./kadai1/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai1/scripts/'));
});

gulp.task('kadai', () => {
    browserify({
        entries: ['./kadai/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai/scripts/'));
});
