    // 运行任务
var gulp = require('gulp'),
    // 运行服务器
    connect = require('gulp-connect'),
    // 让所有组件拼在一起，让浏览器中也能用require的方式来构建
    browserify = require('gulp-browserify'),
    // 将所有文件拼在一起
    concat = require('gulp-concat'),
    // connct服务器的端口
    port = process.env.port||5000;

gulp.task('browserify',function(){
    gulp.src('./app/js/main.js')
    .pipe(browserify({
        transform: 'reactify',
    }))
    .pipe(gulp.dest('./dist/js'))
});
// live reload
gulp.task('connect',function(){
    connect.server({
        root: './',
        port: port,
        livereload: true
    })
});
// reload js
gulp.task('js',function(){
    gulp.src('./dist/**/*.js')
    .pipe(connect.reload())
});
gulp.task('html',function(){
    gulp.src('./app/**/*.html')
    .pipe(connect.reload())
});
gulp.task('css',function(){
    gulp.src('./app/**/*.css')
    .pipe(connect.reload())
});
gulp.task('watch',function(){
    gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./app/**/*.html',['html']);
    gulp.watch('./app/**/*.css',['css']);
    gulp.watch('./app/js/**/*.js',['browserify']);
});
gulp.task('defult',['browserify']);
gulp.task('serve',['browserify','connect','watch']);