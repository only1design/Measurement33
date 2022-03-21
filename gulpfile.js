// Main modules
import gulp from 'gulp';

// Import path
import path from './gulp/config/path.js';

// Import others plugins
import { plugins } from './gulp/config/plugins.js';

// Global variable
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Tasks import
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { less } from './gulp/tasks/less.js';
import { lessLibs } from './gulp/tasks/lessLibs.js';
import { js } from './gulp/tasks/js.js';
import { raster } from './gulp/tasks/raster.js';
//import { webp } from './gulp/tasks/webp.js';
//import { fonts } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';


// Watcher for files changes
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.less, less);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.raster, raster);
}

// Main tasks
//const mainTasks = gulp.parallel(copy, html, less, lessLibs, js, raster, webp, fonts);
const mainTasks = gulp.parallel(copy, html, less, lessLibs, js, raster);

// Building a task execution script
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev };
export { build };
export { deployZIP };
export { deployFTP };

gulp.task('default', dev);