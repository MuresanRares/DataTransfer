function test(){
 console.log(getFibonacci(0)=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci(2)=='[1 1]'?"Passed":"Failed");
 console.log(getFibonacci(4)=='[1 1 2 3]'?"Passed":"Failed");
 console.log(getFibonacci(11)=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci()=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci("abc")=="not allowed"?"Passed":"Failed");
 }
 test ();
 
(function(){
 console.log(getFibonacci(0)=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci(2)=='[1 1]'?"Passed":"Failed");
 console.log(getFibonacci(4)=='[1 1 2 3]'?"Passed":"Failed");
 console.log(getFibonacci(11)=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci()=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci("abc")=="not allowed"?"Passed":"Failed");
 })();
 
 console.log("reapelare test");
 test ();
 