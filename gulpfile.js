// -----------------------------------------------------------------------
//
//  GULP TASKS
//
//  All the functions that adds hooks to the theme are here.
//  Make sure you know what you're doing before altering this code.
//
//  - Dependencies
//  - Paths
//  - Convert, minify and sourcemap the styles
//  - Join and minify the scripts
//  - Minify images
//  - Watcher
//  - Serve
//  - Default task: run gulp all at once
//
// -----------------------------------------------------------------------

// ----------------------------------------------------
// Dependencies
// ----------------------------------------------------
var gulp      = require('gulp');
var concat    = require('gulp-concat');
var imagemin  = require('gulp-imagemin');
var jshint    = require('gulp-jshint');
var kss       = 'node ' + __dirname + '/node_modules/kss/bin/kss-node ';
var maps      = require('gulp-sourcemaps');
var pngquant  = require('imagemin-pngquant');
var rename    = require('gulp-rename');
var sass      = require('gulp-ruby-sass');
var shell     = require('gulp-shell');
var uglify    = require('gulp-uglify');
var webserver = require('gulp-webserver');

// ----------------------------------------------------
// Paths
// ----------------------------------------------------
var paths = {
  images:  'src/img/*',
  scripts: 'src/js/*.js',
  styles:  'src/sass/*.s*ss'
};

// ----------------------------------------------------
// Convert, minify and sourcemap the styles
// ----------------------------------------------------
gulp.task('styles', function () {
  return sass(paths.styles, {
    style: 'expanded',
    sourcemap: true })
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest('pub/css'))
    .pipe(gulp.dest('docs/'));
  }
);

// ----------------------------------------------------
// Styleguide & documentation
// ----------------------------------------------------
gulp.task('docs', shell.task(
  [kss + 'src/sass/ docs/ --css /docs/style.css']
));

// ----------------------------------------------------
// Join and minify the scripts
// ----------------------------------------------------
gulp.task('scripts', function() {
  gulp.src(paths.scripts)
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('pub/js'));
});

// ----------------------------------------------------
// Minify images
// ----------------------------------------------------
gulp.task('images', function() {
  return gulp.src(paths.images)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('pub/img'));
});

// ----------------------------------------------------
// Watcher
// ----------------------------------------------------
gulp.task('watch',function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// ----------------------------------------------------
// Serve
// ----------------------------------------------------
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 3455,
      livereload: true,
      directoryListing: false,
      fallback: 'index.html',
      open: true
    }));
});

// ----------------------------------------------------
// Default task: run gulp all at once
// ----------------------------------------------------
gulp.task('default', ['styles', 'docs', 'scripts', 'images', 'watch']);
gulp.task('serve', ['default', 'webserver']);
