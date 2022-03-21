import ttf2woff2 from "gulp-ttftowoff2";
import ttf2woff from "gulp-ttf2woff";

export const fonts = () => {
    return app.gulp.src(app.path.src.fonts)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
    
    .pipe(app.gulp.src(app.path.src.fonts))
    .pipe(ttf2woff())
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.plugins.browsersync.stream());
} 