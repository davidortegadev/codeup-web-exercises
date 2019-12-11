
var showMultiplicationTable = function(input){
	for (var i = 1; i<=10; i++){
		console.log(input+' x '+i+' = '+input*i)
	}
};

for (var i = 0; i<10; i++){
	var randomNumber = Math.floor(Math.random() * 180) + 20;
	if (randomNumber%2===0){
		console.log(randomNumber+' is even.')
	}
	else {
		console.log(randomNumber+' is odd.')
	}
}

//didn't work (multiple lines instead of same line)
for (var i = 1; i<10; i++){
	for (var j = 1; j<=i; j++){
		console.log(i+"")
	}
}

for(vari=1;i<10;i++){
	console.log(i.toString().repeat(i))
}


for (var i = 100; i>0; i--){
	if (i%5===0) {
		console.log(i)
	}
}

