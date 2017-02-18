const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
