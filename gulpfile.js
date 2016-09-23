var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

var browserSync = require('browser-sync'); // Reloads the browser when I save.
var reload = browserSync.reload;


//  Gulp Task that mirrors the handlebar folder
gulp.task('html', function () {

    return gulp.src('rosa-rosa-source/structure-html-md/**/*.hbs')
        .pipe(gulp.dest('node_modules/ghost/content/themes/rosa-rosa/'))
        .pipe(reload({stream:true}));
});


// Gulp Task that compiles Sass files.
gulp.task('styles', function () {

    // return gulp.src('rosa-roja-source/styles-sass/**/*.scss')
    return gulp.src('rosa-rosa-source/styles-sass/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('node_modules/ghost/content/themes/rosa-rosa/assets/css'))
        // .pipe(gulp.dest('node_modules/ghost/content/themes/rosa-roja/assets/css'))
        .pipe(reload({stream:true}));
});


gulp.task('scripts', function() {
  console.log("STYLE TASK WORKING");
});

// watches 
gulp.task("watch", function(){
  gulp.watch('rosa-rosa-source/structure-html-md/**/*.hbs', ['html']);
  gulp.watch('rosa-rosa-source/styles-sass/**/*.scss', ['styles']);
});


// let's sync with browserSync
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:3000"
    });
});


// this wraps everything and loads the ghost server
gulp.task('ghost', ['html','styles', 'scripts','browser-sync','watch'], function() {  
    var ghost = require('ghost');
    process.env.NODE_ENV = 'development';
    ghost({ config: __dirname + '/ghost-config.js' }).then(function (ghostServer) {
        ghostServer.start();
    });
});


gulp.task('default', ['ghost']);