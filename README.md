# Rosa.js Project

Rosa.js is a CMS theme builder using Gulp Sass Bourbon.

### Story

I decided to create `Rosa.js` because I got really interested on content media and on how to display the content. I will be building multiple blogs and digital magazines, so I need a way to create site by adjusting some Sass variables and quickly get something up.  The word Rosa either means rose (flower) or pink (color) depending on the context. The name has two inside meanings for me, the first one is that Rosa was my grandmother’s name, and the second is that I’m from Florida,  a Spanish word that literally means “full of flowers”. I’m hoping to get the Florida Dev community to do more open source projects that are flower related.
![rosa-roja.js](https://raw.githubusercontent.com/lulato/rosa.js/master/rosa-roja-source/static-assets/rosa.js.jpeg)
Photo by [João Silas](https://unsplash.com/photos/Z5M06BfTTkc),
Edited by [Rirod](https://www.instagram.com/rirod180/)

**Level of opinion 1–10 (5)** 
Enough flexibility, but with basic guidance.

#### Status
This is my first time open sourcing anything, so this could be considered 0.0.1, I have tested this a little bit so don't worry [CHANGELOG.md](https://github.com/lulato/rosa.js/blob/master/CHANGELOG.md).

#### Me
I'm Luis Ricardo La Torre, a Product Designer in Miami Beach, FL. [lulato.com](http://lulato.com), and you should definelty say `hi` on [Twitter](https://twitter.com/TheLuisLaTorre)


## Install

### Getting Started
I recommend doing the manual setup so you understand a bit better of how everything works, and so you can your hands dirty. If you are in a hurry or if you are doing a *’Hackathon’* just do the automatic setup. I’m using Ghost CSM, mainly because I want to keep my whole stack in Javascript at the moment, but feel free to change your CMS by editing the `gulpfile.js` on the manual setup. 

##### Automatic Setup
- Clone the repo: `git clone https://github.com/lulato/rosa.js.git`
- Run: `npm install`
- Run: `gulp`


##### Manual Setup
If you start from an empty folder and using `npm` to install all your dependencies, you will likely end  up in the same place. I just like showing people the process so they can see all parts working on the theme builder.

Gulp will be the glue here
- Run: `npm install gulp --save-dev`
- Run: `npm install ghost --save-dev`
- Run: `npm install browsersync --save-dev`


- Run: `npm install gulp-sass --save-dev`
- Run: `npm install node-bourbon --save-dev`
- Run: `npm install node-neat --save-dev`

If you are not familiar with `ghost`, where have you been? Ghost is a CMS build entirely on Javascript on top of NodeJS. [John O'Nolan](https://github.com/JohnONolan) used to work at Wordpress and decided to create Ghost all in JS.

`Browsersync` will help us with the auto-refresh in multiple devices, so I can see the changes in real time in the phone.
`Sass` will help us divide the stylesheets into smaller files for each of it’s purposes. I use `neat` from `bourbon` to set up basic grid. (Optional)


##### Ghost Theme Folder Structure
Documentation
The themes for ghost is in the content folder, which can be found on the `/node_modules/`, I wouldn’t touch it unless you know what you are doing.

Deep in the modules
If you are familiar how  `node_modules` work and how they are organized The main folder is deep in the modules in the ghost module, inside of content. You have to duplicate the theme called casper and rename it rosa-roja in order for the `gulpfile.js` to run without errors. I do this automagically on my `npm scripts` so feel free to steal my `package.json` file. 

##### espinas.db
Espinas is sample database of photos and articles from wikipedia and unsplash for the purpose of testing and developing the themes.
You have to replace `ghost-dev.db` for `espinas.db`
and edit the changes on `ghost-config.js`

Admin Credential (Spam email, don’t even bother emailing)
holaboyperu@hotmail.com
123456789

gulpfile.js (head)

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var neat = require('node-neat').includePaths;
    var browserSync = require('browser-sync'); // Reloads the browser when I save.
    var reload = browserSync.reload;
    


gulpfile.js (Same file - style section)
This process our Sass files and compiles into one css file where 

    gulp.task('styles', function () {    
        return gulp.src('rosa-roja-source/styles-sass/**/*.scss')
            .pipe(sass({
                includePaths: ['styles'].concat(neat)
            }))
            .pipe(gulp.dest('node_modules/ghost/content/themes/rosa-roja/assets/css')) // change theme-folder
            .pipe(reload({stream:true}));
    });


Ghost Theme Docs
Bourbon Docs

Upgrades
Depending when you are downloading this project, you might have to upgrade from one ghost version to another, check the [CHANGELOG](https://github.com/lulato/rosa.js/blob/master/CHANGELOG.md).


Editing the theme

When building a theme in general I have general flow on how I like to approach things, hopefully my flow helps you develop your own unique sites faster and more beautiful using this theme builder.

Typography
70–80 percent of a website is typography. Thats what I usually tackle first. You can do this by previewing the `post.hbs` using the dummy database included called `espinas.db`

Red Rose Theme; For Articles
Details if you are upgrading.
Duplicate Casper folder, Name it your Theme Name 
Duplicate the Sass folder. Name it your Theme Name Sass

Adjust the `gulpfile.js` accordantly



## Contribute
A short explanation of cool devs can contribute. Be sure to show how to submit issues and pull requests. Include a [CONTRIBUTING.md file](https://github.com/lulato/rosa.js/blob/master/CONTRIBUTING.md).

## License
A link to the Rosa.js copyright and [LICENSE.md file](https://github.com/lulato/rosa.js/blob/master/LICENSE.md).