var gulp = require('gulp');

gulp.task('default', function() {
    console.log("hello world")
    // 将你的默认的任务代码放在这
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

var cleanCSS = require('gulp-clean-css');
//压缩css
gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'));
});