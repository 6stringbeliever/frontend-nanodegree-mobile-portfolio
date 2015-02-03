## Website Performance Optimization portfolio project

### Installation

1. Download the repo.
1. The optimized content is in the dist directory. The source code is in the dev directory.
1. Run the default Gulp task to re-minify everything if you make changes to the dev code.

### Optimizations

Performed the following optimizations:

* Inlined CSS on portfolio pages to remove render blocking
* Switched Google webfonts to JavaScript method to remove render blocking
* Created multiple sizes for pizzeria images (thumbnail, body size) to reduce file size
* Losslessly compressed all images and connected images to local, optimized images
* Used Gulp JS and plugins to minify HTML, CSS, and JavaScript
* Reduced calculations on pizzeria by calculating the correct number of pizzas to show
* Reduced calculations on pizzeria by moving several functions that only needed
to be calculated once out of for loops.

### Sites Used

Referenced the following sites and used the following tools:

* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [ImageOptim](https://imageoptim.com/)
* [GulpJS](http://gulpjs.com/)
* [Getting Started with Gulp](http://travismaynard.com/writing/getting-started-with-gulp)
