
while(true) {
	var userNumber = prompt('Pick an odd number between 1 and 50');
	if (userNumber>50||userNumber<0||userNumber%2===0){
	continue
	}
	else break
}

for (i=0; i<50; i++){
	if(i==userNumber){
		console.log('We\'re just going to go ahead and skip '+userNumber)
	}
	else if(i%2!==0){
		console.log('Here\'s an odd number: '+i)
	}
}