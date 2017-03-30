const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-js', () => {
  return gulp.src('src/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    // .pipe(htmlmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
    // .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
