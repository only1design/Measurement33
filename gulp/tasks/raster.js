import imagemin from "gulp-imagemin";
import imgOptipng from "imagemin-optipng";
import imgGifsicle from "imagemin-gifsicle";
import imgSvgo from "imagemin-svgo";
import jpegRecompress from "imagemin-jpeg-recompress";
import pngquant from "imagemin-pngquant";

export const raster = () => {
    return app.gulp.src(app.path.src.raster)
        // Error notificator
        .pipe(app.plugins.plumber( 
            app.plugins.notify.onError({
                title: "RASTER",
                message: "Error: <%= error.message %>"
            })
        ))
        // Images compressor
        .pipe(app.plugins.if(
            app.isBuild,
            imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
            },
            [
                jpegRecompress({
                    loops: 6,
                    min: 50,
                    max: 90,
                    quality: 'high',
                    use: [pngquant({
                        quality: [0.8, 1],
                        strip: true,
                        speed: 1
                    })],
                }),
                imagemin([imgGifsicle()]),
                imagemin([imgOptipng()]),
                imagemin([imgSvgo([{ removeViewBox: false }])])
            ], )
        ))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
} 