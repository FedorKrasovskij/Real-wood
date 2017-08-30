var gulp = require('gulp');

gulp.task('css',function(){
	gulp.src('style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch',function(){
	gulp.watch('style.scss',['css']);
})

gulp.task('default', ['css']);
