function test(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)=='abs'?"Passed":"Failed");
 console.log(sum()=="n is undefined"?"Passed":"Failed");
 console.log(sum("abc")=="n is not a number"?"N is not a number":"N is a number");
 }
 test ();
 
(function(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="invalid argument"?"Passed":"Failed");
console.log(sum("abc")=="n is not a number"?"N is not a number":"N is a number");
 })();
 
 console.log("reapelare test");
 test ();
 