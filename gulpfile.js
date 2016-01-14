var gulp   = require('gulp'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload,
		babel = require('gulp-babel'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		imageMin = require('gulp-imagemin'),
		minifyCSS = require('gulp-minify-css'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify');

gulp.task('bs', function() {
	browserSync.init({
		server: {
            baseDir: "./"
        }
	});
});

gulp.task('styles', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(plumber({
		  errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(concat('styles.css'))
		.pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./'))
		.pipe(reload({ stream: true }));
});

gulp.task('app', function () {
	gulp.src('./js/**/*.esnext.js')
		.pipe(babel({
			presets: ['babel-preset-es2015']
		}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./js'))
		.pipe(reload({stream:true}));
});

gulp.task('images', function () {
	return gulp.src('./images/**/*')
		.pipe(imageMin())
		.pipe(gulp.dest('./images'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('./js/**/*.js', ['app']);
	gulp.watch('./**/*.html', reload);
});

gulp.task('default', ['styles', 'app', 'images', 'bs', 'watch']);