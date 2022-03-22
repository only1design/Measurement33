import gulpLess from 'gulp-less'; //less preprocessor
import gulpSourcemaps from 'gulp-sourcemaps'; //sourcemaps
import rename from 'gulp-rename'; //rename files
import cleanCss from 'gulp-clean-css'; //css minify
// import webpcss from 'gulp-webpcss'; //output WEBP images
import autoprefixer from 'gulp-autoprefixer'; //adding vendor prefixes
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //grouping media queries


export const less = () => {
    return app.gulp.src(app.path.src.less)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "LESS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        // CSS Sourcemap
        .pipe(app.plugins.if(
            app.isDev,
            gulpSourcemaps.init()
        ))
        // Less interpretator
        .pipe(gulpLess())
        // Group Meadia Queries
        .pipe(app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        ))
        // WebP CSS
        // .pipe(app.plugins.if(
        //     app.isBuild,
        //     webpcss({
        //         webpClass: '.webp',
        //         noWebpClass: '.no-webp',
        //     })
        // ))
        // Autoprefixer
        .pipe(app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrideBrowserslist: ["last 8 versions"],
                browsers: [
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24',
                    'Explorer >= 11',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6',
                ],
                cascade:  true,
            })
        ))
        // CSS minificator
        .pipe(app.gulp.dest(app.path.build.css)) // Uncomment for dublicate unminifed css
        .pipe(app.plugins.if(
            app.isBuild,
            cleanCss()
        ))
        .pipe(rename({
            extname: ".min.css"
        }))
        // CSS Sourcemap
        .pipe(app.plugins.if(
            app.isDev,
            gulpSourcemaps.write('/')
        ))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}