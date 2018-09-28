const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
let cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
let babel = require('gulp-babel');



gulp.task('optimize_image', () =>
    gulp.src('./img/**/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('./js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

gulp.task('concat-css', function () {
    return gulp.src('./css/*.css')
        .pipe(concat('main.css'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/'));
});

gulp.task('concat-js', function () {
    return gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./assets/'));
});