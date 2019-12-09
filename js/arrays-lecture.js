var pets=[];
pets[0]='toby';
pets[1]='princess';
pets[2]='samson';
pets[3]='jill';
pets[4]='bubbles';
pets[5]='malu';

for (var i=0;i<pets.length;i++){
	console.log(pets[i]);
}

pets.forEach(function(pets, i, arr){
	console.log(pets)
});
