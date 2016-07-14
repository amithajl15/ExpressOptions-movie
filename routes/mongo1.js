var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var fdata = {};
var User = require("./mongooes");
mongoose.connect('mongodb://localhost/users');

 var db = mongoose.connection;
// var insertDocument = function(db, callback) {
//    db.collection('restaurants').insertOne( {
//       {name:"Swe",age:23}
//    }, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the restaurants collection.");
//     callback();
//   });
// };




router.get('/', function (req, res) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find( function(err, data){
      fdata = data;

        res.send(fdata);
    });

});
});
// router.post('/', function (req, res) {
//   db.on("error", console.error.bind(console, "Connection Error:"));
//
//     db.open('open', function(){
//       User.insert({name:"Swe",age:23}, function(err, data){
//         fdata = data;
//
//           res.send(fdata);
//       });
//
//   });
// });
module.exports = router;
