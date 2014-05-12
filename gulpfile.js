/*
Ref.
https://github.com/gulpjs/gulp/blob/master/docs/README.md#articles-and-recipes
http://tagtree.tv/gulp
http://stackoverflow.com/questions/22313270/run-gulp-plugin-on-single-file

Creates a directory /build/
concatanated and minifies CSS, JS, and HTML files and places them in: /build/
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cssmin = require('gulp-minify-css');	//minify CSS
var uglify = require('gulp-uglify');		//minify JS
var htmlmin = require('gulp-minify-html');	//minify HTML
//var gulputil = require('gulp-util');

/**
 * Filters - for selecting all the files of a specific type
 */
var gulpFilter = require('gulp-filter');
var jsFilter = gulpFilter('**/*.js');
var cssFilter = gulpFilter('**/*.css');
var htmlFilter = gulpFilter('**/*.html');

/**
 * process-all task - run with gulp >>gulp process-all
 */
gulp.task('process-all', function () {
    gulp.src('public/**')				//source path
        .pipe(jsFilter)					//filter - selects all js files
        .pipe(uglify())					//uglifies them
        .pipe(jsFilter.restore())		//restore the previously filtered out files

        .pipe(cssFilter)				//selects all css files at source path
        .pipe(cssmin())					//minifies
        .pipe(cssFilter.restore())		//restore the previously filtered out files

  //      .pipe(htmlFilter)
  //      .pipe(htmlmin())
  //      .pipe(htmlFilter.restore())

        .pipe(gulp.dest('Build/'));		//destination path
});



/**
 * process-html task - run with gulp >>gulp process-html
 */
gulp.task('process-html', function() {
	return gulp.src('public/views/*.html')		//source to CSS files
	.pipe(concat('htmlFilter'))
	.pipe(concat('main.html'))
	.pipe(htmlmin())
	.pipe(htmlFilter.restore())
	.pipe(rename({suffix: '.min'}))				//rename file    
    .pipe(gulp.dest('build/html/'));			//destination path
})

/**
 * process-css task - run with gulp >>gulp process-css
 */
gulp.task('process-css', function() {
	return gulp.src('public/css/*.css')		//source to CSS files
	.pipe(concat('main.js'))
	.pipe(gulp.dest('build/css/'))			//destination path
	.pipe(cssmin())							//concatenate all the CSS files found into this file
	.pipe(rename({suffix: '.min'}))			//rename file
	.pipe(gulp.dest('build/css/'))			//destination path

})

/**
 * process-css task - run with gulp >>gulp process-css
 * Saves min and non-min files
 */
gulp.task('process-js', function() {
	//return gulp.src('public/js/*.js')		//source to CSS files
    gulp.src('public/js/**')				//source path
    .pipe(jsFilter)							//filter a subset of the files
	.pipe(concat('main.js'))				//concatanate
	.pipe(gulp.dest('build/js/'))			//file destination
	.pipe(rename({suffix: '.min'}))			//rename file
	.pipe(uglify())							//uglify js
	.pipe(gulp.dest('build/js/'))			//file destination
})


/**
 * watch task - run with  >>gulp watch
 * checks for changes to the files and updates changes
 */
gulp.task('watch', function() {
	gulp.watch('public/js/*.js', ['process-js'])
})

