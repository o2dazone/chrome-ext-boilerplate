var gulp = require('gulp');
var connect = require('gulp-connect');
var minify = require('gulp-minify');
var webpack = require('webpack-stream');
var exec = require('child_process').exec;

gulp.task('scripts', () =>
  gulp.src('./scripts/index.js')
    .pipe(webpack({
      cache: true,
      output: {
        filename: 'index.js'
      }
    }))
    .pipe(minify({ noSource: true, ext: { min: '.js' } }))
    .pipe(connect.reload())
    .pipe(gulp.dest('./chrome-extension'))
);

gulp.task('refresh_extension', () => {
  exec('open http://reload.extensions', null);
});

gulp.task('watch', gulp.series('scripts', () => {
  gulp.watch('./scripts/*.js', gulp.parallel('scripts', 'refresh_extension'));
  connect.server({
    port: 8080,
    root: 'chrome-extension',
    livereload: true
  });
}));
