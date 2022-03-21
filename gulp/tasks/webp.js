import gulpWebp from "gulp-webp";

export const webp = () => {
    return app.gulp.src(app.path.src.raster)
        // Error notificator
        .pipe(app.plugins.plumber( 
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %>"
            })
        ))
        // Images compressor
        // Optimized conversion to WEBP
        .pipe(app.plugins.if(
            app.isBuild,
            app.gulp.src(app.path.src.toWebp)
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            app.plugins.newer(app.path.src.toWebp)
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            gulpWebp()
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            app.gulp.dest(app.path.build.images)
        ))
        .pipe(app.plugins.browsersync.stream());

} 