
//  定义一个函数，该方法回调等待5秒；
function waitFive(name, function_name){
	var temp = 0;
	var currentDate = new Date();
	while(temp < 5000){
		var now = new Date();
		temp = now - currentDate;
	}
	//  执行回调函数；
	function_name(name);
}

//  定义回调函数 echo();
function echo(name){
	console.log(name);
}

//  调用waitFive();
waitFive("123", echo);
console.log("its over");