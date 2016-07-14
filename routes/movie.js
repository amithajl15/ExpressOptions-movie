var express = require('express');
var router = express.Router();
var request = require('request');
var result=[];
/* GET home page. */
router.post('/', function(req, res, next) {
var mname=req.body.mname;
//var year=req.body.year;

var murl="http://www.omdbapi.com/?t="+mname+"&y=&plot=short&r=json";
// res.send(murl);
// router.ajax({
//      url: murl,
//      dataType: 'json',
//      cache: false,
//      success: function(data) {
//       res.send(data);
//      }
//    });


request(murl, function(err, resp, body) {
 body = JSON.parse(body);
result.push(body);
 res.send(result);
});
});


module.exports = router;
