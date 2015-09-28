var gulp = require('gulp');
var bower = require('bower');
var $ = require('gulp-load-plugins')();
var sh = require('shelljs');
var shell = require('gulp-shell');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jsdoc = require('gulp-jsdoc');


var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./app/www/js/**/*.js'],
};

gulp.task('default', ['sass', 'eslint']);

// JS处理任务
gulp.task('js', function () {
  gulp.src(paths.js)      //引入所有需处理的JS
    .pipe(concat('app.js'))                  //合并JS文件
    .pipe(gulp.dest('./app/www/lib/yike'))        //完整版输出
    .pipe(rename({suffix: '.min'}))         //重命名
    .pipe(uglify())                           //压缩JS
    .pipe(gulp.dest('./app/www/lib/yike'));        //压缩版输出
});

gulp.task('docs', shell.task([
  'mkdir -p dist/js-sdk-api-docs',
  'JSDOCDIR=tools/jsdoc-toolkit/ sh tools/jsdoc-toolkit/jsrun.sh -d=dist/js-sdk-api-docs -t=tools/jsdoc-toolkit/templates/jsdoc models/ clouds/',
]));

gulp.task('watch', function () {
  gulp.watch(paths.js, ['js']);
});

