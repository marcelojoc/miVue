var gulp = require('gulp'),
	connect = require('gulp-connect');


gulp.task('js', function () {
	gulp.src('./js/*.js')
	.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src('*.html')
	.pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		root: './',
		port: 3000,
		livereload: true
	});
});

gulp.task('watch', function(){
	//gulp.watch(input + '**/*.scss' , ['sass']);
	gulp.watch('*.html' , ['html']);
	gulp.watch('./js/*.js' , ['js']);
});


// tarea por defecto
//gulp.task('default', ['sass','connect','watch']);

gulp.task('default', ['connect','watch']);