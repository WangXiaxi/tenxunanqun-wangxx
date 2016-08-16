var gulp = require('gulp');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');

var paths = {
  scripts: ['./dev/js/*'],
  stylus: ['./dev/stylus/*']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
      .pipe(uglify())
    .pipe(gulp.dest('./pro/js'));
});
gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({compress:true}))  //compress
    .pipe(gulp.dest('./pro/css'));
});
// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylus, ['stylus']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts','stylus']);