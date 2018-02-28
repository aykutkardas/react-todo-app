const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

gulp.task('css', ()=>{
    return gulp.src('./src/scss/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(prefix())
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('default', ()=>{
    gulp.watch('./src/scss/**/*.scss', ['css']);
});