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
  models: ['./www/js/models/*.js'],
};

gulp.task('default', ['sass', 'eslint']);

// JS处理任务
gulp.task('models', function () {
  gulp.src('./models/*.js')      //引入所有需处理的JS
    .pipe(concat('models.js'))                  //合并JS文件
    .pipe(gulp.dest('./'))        //完整版输出
    .pipe(rename({suffix: '.min'}))         //重命名
    .pipe(uglify())                           //压缩JS
    .pipe(gulp.dest('./'));        //压缩版输出
});

gulp.task('docs', shell.task([
  'mkdir -p dist/js-sdk-api-docs',
  'JSDOCDIR=tools/jsdoc-toolkit/ sh tools/jsdoc-toolkit/jsrun.sh -d=dist/js-sdk-api-docs -t=tools/jsdoc-toolkit/templates/jsdoc models/ clouds/',
]));

gulp.task('watch', function () {
  gulp.watch(paths.models, ['models']);
});

