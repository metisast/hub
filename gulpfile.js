const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const concatCSS = require('gulp-concat-css');
const concatJS = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('sass', function () {
    return gulp.src('./src/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('concatCSS', function () {
    return gulp.src(['./src/libs/bootstrap-grid.css', './dist/css/main.css'])
        .pipe(concatCSS('bundle.css', {rebaseUrls: false}))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('concatJS', function () {
    return gulp.src(['./src/libs/jquery.js', './src/libs/slick.js', './src/components/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concatJS('bundle.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('compressCSS', function () {
    gulp.src('./dist/css/bundle.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('compressJS', function(cb){
    pump([
            gulp.src('./dist/js/bundle.js'),
            uglify(),
            gulp.dest('./dist/js')
        ],
        cb
    );
});

gulp.task('watch', function () {

    watch('./src/**/*.scss', function () {
        gulp.start('sass');
    });

    watch('./dist/css/main.css', function () {
        gulp.start('concatCSS');
    });

    watch('./src/components/**/*.js', function () {
        gulp.start('concatJS');
    })

});