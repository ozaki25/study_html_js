'use strict';

let gulp = require('gulp');
let runSequence = require('run-sequence');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

// default
gulp.task('default', ['build']);

// build
gulp.task('build', () => {
    runSequence(['kadai1']);
});

// browserify
gulp.task('kadai1', () => {
    browserify({
        entries: ['./kadai1/scripts/main.js'],
        require: ['jquery', 'underscore','backbone']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./kadai1/scripts/'));
});
