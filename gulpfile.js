var gulp 						= require('gulp');
var browserSync 				= require('browser-sync');
var sass        				= require('gulp-sass');
var autoprefixer 			    = require('gulp-autoprefixer');
var concatCSS 					= require('gulp-concat-css');
var ftp 						= require('gulp-ftp');
var wait                        = require('gulp-wait');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(wait(500))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCSS("style.css"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('ftp', function() {
    return gulp.src('src/*')
        .pipe(ftp({
            host: 'website.com',
            user: 'johndoe',
            pass: '1234',
            remotePath: 'PATH'
        }))
        .pipe(gutil.noop());
});

gulp.task('default', ['serve']);