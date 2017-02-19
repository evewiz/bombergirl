var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

var dependencies = [
	'jquery'
];

var scriptsCount = 0;

gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('deploy', function () {
    bundleApp(true);
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

function bundleApp(isProduction) {
    scriptsCount++;

    var appBundler = browserify({
        entries: './src/game.js',
        debug: true
    })

    // If it's not for production, a separate vendors.js file will be created
    // the first time gulp is run so that we don't have to rebundle things like
    // react everytime there's a change in the js file
    if (!isProduction && scriptsCount === 1) {
        // create vendors.js for dev environment.
        browserify({
            require: dependencies,
            debug: true
        })
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./dist/'));
    }
    if (!isProduction) {
        // make the dependencies external so they dont get bundled by the 
        // app bundler. Dependencies are already bundled in vendor.js for
        // development environments.
        dependencies.forEach(function (dep) {
            appBundler.external(dep);
        })
    }

    appBundler
  		// transform ES6 and JSX to ES5 with babelify
	  	.transform('babelify', { presets: ['es2015'] })
	    .bundle()
	    .on('error', gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./dist/'));
}