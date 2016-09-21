var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');



gulp.task('style',function(){
		gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));

});

gulp.task('assets',function(){
	gulp
	.src('assets/*')
	.pipe(gulp.dest('public'));
});


gulp.task('build', function(){
 browserify('./src/index.js',{ debug: true})
 .transform(babel)
 .bundle()
 .on('error',(err) => {console.log(err); this.emit('end')})
 .pipe(source('index.js'))
 .pipe(rename('app.js'))
 .pipe(gulp.dest('public'));
	
});


gulp.task('default',['style','assets','build'], () => {

	console.log('Watching...')

	var watcher = gulp.watch(['./src/*.js', './views/*.pug', 'index.scss', './assets/*.*'],
	['style', 'assets', 'build'])

	watcher.on('change', (event) => {
			console.log('File '+ event.path + ' was '+ event.type);
	})
});
