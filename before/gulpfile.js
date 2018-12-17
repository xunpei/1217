var gulp = require("gulp");

var server = gulp.require("gulp-webserver");

gulp.tack("server", function() {
    return gulp.src("src")
        .pipe(server({
            port: 9090,
            open: true,
            proxies: [{
                cource: "/api/get/train_tickets",
                target: "http://172.23.46.24:3000/api/get/train_tickets"
            }]
        }))
})