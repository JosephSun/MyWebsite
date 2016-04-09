const gulp = require('gulp'),
concat = require('gulp-concat');


// creating our task named test
gulp.task('test', () => {
  console.log("Gulp is running");
})

gulp.task('concatScripts', () => {
  gulp.src([
    'js/jquery.js',
    'js/main.js'
  ])
  .pipe(concat("app.js"))
  .pipe(gulp.dest('js'))
})
