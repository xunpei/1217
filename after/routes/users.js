var express = require('express');
var router = express.Router();
var datas = require("../data/data");
// console.log(data);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get("/api/get/train_tickets", function(req, res, next) {
    // console.log(req.query)
    if (req.query.data == 1) {
        res.json({ code: 1, data: datas })
    } else {
        var arrs = [];
        for (var i = 0; i < req.query.data; i++) {
            arrs.push("数据" + (i + 1));
        }
        res.json({ code: 1, data: arrs })
    }
})
module.exports = router;