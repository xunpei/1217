var gulp = require("gulp");

var server = require("gulp-webserver");

gulp.task("server", function() {
    return gulp.src("src")
        .pipe(server({
            port: 9090,
            open: true,
            proxies: [{
                source: "/api/get/train_tickets",
                target: "http://172.23.46.24:3000/users/api/get/train_tickets"
            }]
        }))
})
gulp.task("default", gulp.series("server"));