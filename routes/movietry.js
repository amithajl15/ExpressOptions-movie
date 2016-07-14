var express = require('express');
var router = express.Router();
var request = require('request');
var result1=[];
/* GET home page. */
router.post('/', function(req, res, next) {
var mname=[];
 mname[0]=req.body.mname1;
 mname[1]=req.body.mname2;
 mname[2]=req.body.mname3;
//var year=req.body.year;
for(var i=0;i<mname.length;i++){
var murl="http://www.omdbapi.com/?t="+mname[i]+"&y=&plot=short&r=json";
// res.send(murl);


request(murl, function(err, resp, body) {
 var out = JSON.parse(body);
result1.push(out);
console.log(result1);

});

}
res.send(result1);
});


module.exports = router;
