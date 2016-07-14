var express = require('express');
var router = express.Router();
function getResult(operation, number1, number2)
{
 var result = 0;

 if(operation == "add")
  result = number1 + number2;

 else if(operation == "subtract")
  result = number1 - number2;

 else if(operation == "multiply")
  result = number1 * number2;

 else if(operation == "divide" && number2 != 0)
  result = number1 / number2;
console.log(result);
 return result;
}

/* GET home page. */
router.get('/:op/:num1/:num2', function(req, res,next) {
//  res.render('index', { title: 'Amitha' });
//res.send({value:"get"});
 var queryString = new String(req.url);

//   // var queryString = new String("/add/5/4");
   var arr = queryString.split("/");
  // var action = arr[1].replace("/","").split("=")[1]; // extracting the action specified in the URL
  var action = new String(arr[1].split("=")[1] || "0");
var firstNumber = new String(arr[2].split("=")[1] || "0"); // extracting the first number
var secondNumber = new String(arr[3].split("=")[1] || "0");
 var result = getResult(action, Number(firstNumber) , Number(secondNumber));
res.send("Result : "+result);
//res.send("arr "+firstNumber+"act "+action);
});
// router.post('/:num1', function(req, res,next) {
// //  res.render('index', { title: 'Amitha' });
// res.send({value:"post"});
// //  var queryString = new String(req.url);
// //   // var queryString = new String("/add/5/4");
// //    var arr = queryString.split("/");
// //   var result = getResult("add", Number(arr[2]) , Number(arr[3]));
// // res.send("Result : "+result);
//
// });
router.get('/', function(req, res,next) {


res.send("just/ : ");

});

module.exports = router;
