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
        require: ['jquery', 'underscore','backbone', 'bootstrap', 'backbone.validation']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./work/scripts/'));
});

var range = [1,2,3,4,5,6,7,8,9,10];

range.forEach(function(i) {
    var task = 'kadai' + i;
    gulp.task(task, () => {
        browserify({
            entries: ['./' + task + '/scripts/main.js'],
            require: ['jquery', 'underscore','backbone', 'bootstrap', 'backbone.validation']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./' + task + '/scripts/'));
    });
});
