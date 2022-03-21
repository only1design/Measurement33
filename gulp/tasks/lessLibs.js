import gulpLess from 'gulp-less'; // Less preprocessor
import gulpSourcemaps from 'gulp-sourcemaps'; // Sourcemaps
import cleanCss from 'gulp-clean-css'; // Css minify
import gulpConcat from 'gulp-concat'; // Concat filess

export const lessLibs = (done) => {
    if (app.path.src.lessLibs.length > 0) {
        return app.gulp.src(app.path.src.lessLibs)
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "LESS LIBS",
                    message: "Error: <%= error.message %>"
                })
            ))
            // CSS Sourcemap
            .pipe(app.plugins.if(
                app.isDev,
                gulpSourcemaps.init()
            ))
            // Less interpretator
            .pipe(gulpLess())
            // CSS minificator
            .pipe(app.plugins.if(
                app.isBuild,
                cleanCss()
            ))
            .pipe(gulpConcat('libs.min.css'))
            // CSS Sourcemap
            .pipe(app.plugins.if(
                app.isDev,
                gulpSourcemaps.write('/')
            ))
            .pipe(app.gulp.dest(app.path.build.css))
    } else {
        return done();
    }
}