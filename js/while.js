let i=1;
while (i<65536){
	console.log(i*2);
	i*=2
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// var ranNum = Math.floor(Math.random() * 5) + 1;

do {
	var ranNum = Math.floor(Math.random() * 5) + 1;
	if (allCones>ranNum) {
		console.log(ranNum + ' cones sold!');
		allCones -= ranNum;
		console.log(allCones+' cones left!')
	}
	else if (ranNum>allCones){
		console.log('I cannot sell you '+ranNum+' cones, I only have '+allCones+'.');
	}
	else {
		console.log('Yay! I sold them all!');
		break
	}
} while (allCones!==0);