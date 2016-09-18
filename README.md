# Rosa.js Project

Rosa.js is a CMS theme builder using Gulp Sass Bourbon.

Story

I decided to create Rosa.js because I got really interested on content media and on how to display the content. I will be buidling multiple blogs and digital magazines, so I need a way to create site by adjusting some Sass variables and quickly get something up.  The word Rosa either means rose (flower) or pink (color) depending on the context. The name has two inside meanings for me, the first one is that Rosa was my grandmother’s name, and the second is that I’m from Florida, spanish word that literally means “full of flowers”. I’m hoping to get the Florida Dev community to do more open source projects that are flower related.


Level of opination 1–10 (5)
Enough flexibility, but with basic guidance.


Getting Started
I recomend doing the manual setup so you understand a bit better of how everything works so you can your hands dirty. If you are in a hurry or in a hack-athon, just do the automatic setup. I am using Ghost CSM, mainly because I want to keep my whole stack in Javascript at the moment, but feel free to change your CMS by editing the gulpfile on the manual setup. 

Automatic Setup

run
npm install

gulp

Coming Soon. (Local Server)

Manual Setup


Browsersync will help me with the auto-refresh in multiple devices, so I can see the chages in real time in the phone.
Sass will help me devide the stylesheets into smaller files for each of it’s purposes.
I use neat from bourbon to set up basic grid. (Optional)


Ghost Theme Folder Structure
Documentation
The themes for Ghost is in the content folder, 
Ghost uses Handlebars

Deep in the modules
the core folder is deep in the modules in the ghost module.


Bourbon Docs
Bourbon Github
gulpfile.js (head)

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var neat = require('node-neat').includePaths;
    var browserSync = require('browser-sync'); // Reloads the browser when I save.
    var reload = browserSync.reload;
    


gulpfile.js (Same file - style section)
This process our Sass files and compiles into one css file where 

    gulp.task('styles', function () {    
        return gulp.src('styles/**/*.scss')
            .pipe(sass({
                includePaths: ['styles'].concat(neat)
            }))
            .pipe(gulp.dest('content/themes/thenicesw/assets/css')) // change theme-folder
            .pipe(reload({stream:true}));
    });


Upgrades
Depending when you are dowloading this project, you might have to upgrade from one ghost version to another.

Spines.db
It’s sample database of photos and articles from wikipedia and unsplash for the purpose of testing and developing the themes.
Admin Credential
holaboyperu@hotmail.com
123456789


Editing the theme

When building a theme in general I have general flow on how I like to aproach things, hopefully my flow helps you develop your own unique sites faster and more beautifil using this theme builder.

Typography
70–80 percent of a website is typography. Thats what I usually tackle first. You can do this by previewing the post.hbs using the dummy database included called espinas.db

Red Rose Theme; For Articles
Details if you are upgrading.
Duplicate Casper folder, Name it your Theme Name 
Duplicate the Sass folder. Name it your Theme Name Sass

Adjust the Gulpfile.js accordantly
