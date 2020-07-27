const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');

gulp.task('styles', function() {
    return gulp.src("src/service/styles/index.+(scss|sass)")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/service/styles"));
});

gulp.task('watch', function() {
    gulp.watch("src/components/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('imgs', function() {
    return gulp.src('src/components/**/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/components'))
})

gulp.task('images', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/images'))
})

gulp.task('default', gulp.parallel('watch', 'styles', 'imgs', 'images'));