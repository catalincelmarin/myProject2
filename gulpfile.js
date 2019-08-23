var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(
            {
                style: 'expanded',
                sourcemap: true
            }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function() {
    gulp.watch('scss/*.scss',
        gulp.series(['sass']));
});