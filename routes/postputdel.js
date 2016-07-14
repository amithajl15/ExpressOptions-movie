var express = require('express');
var router = express.Router();
var bodyParser     =require('body-parser');

/* GET home page. */
router.post('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });

var query1=req.body.var1;
var query2=req.body.var2;
var arr=[1,2,3];
//res.send("Initial array- "+arr);
arr.push(query1);
arr.push(query2);
res.send("array after insertion- "+arr);
});

router.put('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
var arr=[1,2,3];
var ind=req.body.ind;
var value=req.body.var;

//res.send("Initial array- "+arr);
arr[ind]=value;

res.send("array after modify- "+arr);
});
router.delete('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
var arr=[1,2,3,4,5,6];
//var ind=req.body.ind;
var value=req.body.var;

//res.send("Initial array- "+arr);
arr.pop();

res.send("array after deletion- "+arr);
});

module.exports = router;
