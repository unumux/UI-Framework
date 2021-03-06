var gulp = require('gulp');
var config = require('../utils/config.js')();

var reload = require('../utils/browserSyncReload.js')();

gulp.task('watch', function() {
    if(config.local.scss) {
        gulp.watch(config.local.scss.src, ['styles']);
    }

    if(config.local.watch) {
        gulp.watch(config.local.watch, reload);
    }
});
