document.getElementById("n").addEventListener('input',inputFib );

 function inputFib(){
	var inputNumber = parseInt(document.getElementById("n").value );
	sum( inputNumber );
}

 function getFibonacci(n){
	if (typeof n === 'undefined') return "not allowed ";
	if(isNaN(n)=== 'true') return "not allowed";
	if (n>10) return "not allowed";
	if (n<1) return "not allowed";
	var i;
	var fib = [1, 1];
	for(i=2;i<=n;i++){
		fib[i]=fib[i-2]+fib[i-1];
	}
	return fib;
 }