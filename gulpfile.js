var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

var cssPath = 'Client/css/**/*.css';

gulp.task('css', () => {
    return gulp.src(cssPath)
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('wwwroot/css/'))
});

gulp.task('watch', () => {
    gulp.watch([cssPath], ['css']);
});

gulp.task('default', ['css']);