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

gulp.task('kadai2', () => {
    browserify({
        entries: ['./kadai2/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai2/scripts/'));
});

gulp.task('kadai3', () => {
    browserify({
        entries: ['./kadai3/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai3/scripts/'));
});

gulp.task('kadai4', () => {
    browserify({
        entries: ['./kadai4/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai4/scripts/'));
});

gulp.task('kadai5', () => {
    browserify({
        entries: ['./kadai5/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai5/scripts/'));
});

gulp.task('kadai6', () => {
    browserify({
        entries: ['./kadai6/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai6/scripts/'));
});

gulp.task('kadai7', () => {
    browserify({
        entries: ['./kadai7/scripts/main.js'],
        require: ['jquery', 'underscore','backbone', 'bootstrap']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai7/scripts/'));
});
