const gulp = require('gulp'),
concat = require('gulp-concat');


// creating our task named test
gulp.task('test', () => {
  console.log("Gulp is running");
})

gulp.task('concatScripts', () => {
  gulp.src([
    'components/*.jsx',
    './index.jsx'
  ])
  .pipe(concat("app.jsx"))
  .pipe(gulp.dest('production'))
})
