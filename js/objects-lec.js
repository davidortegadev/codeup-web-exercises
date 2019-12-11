var car = {
	make: 'Toyota',
	model: 'Sienna',
	year: 2009,
	isTitled: true,
	options: ['4 wheel drive', 'heated seats', 'leather interior'],
	goGoGo : function(key){
		if (key == 'key'){
			console.log('vroom');
		}	else {
			console.log('...');
		}
	}
};

console.log("Car was made in "+car.year);
console.log('Car has these options:');
car.options.forEach(function(option){
	console.log(option)
});

car.goGoGo('key');

var myCar = {
	make:'Toyota',
	model:'Corolla',
	year:2009,
	tootHorn: function(toot){
		if (toot==='toot') {
			console.log('toot too')
		} else {
			console.log ('...')
		}
	}
};

var teacher = {
	name: 'daniel',
	languages: ['english', 'javascript', 'java'],
	teach: function(language){
		if(this.languages.includes(language)){
			console.log('Here is some knowledge about'+language)
		} else {
			console.log('blah blah blah')
		}
	}
};

teacher.teach('ruby');

var truck = new Object();
var cats = [];
===
var cats = new Array();

truck.make = 'Testla';
truck.model = 'CyberTruck';
truck.year = '202x';
truck.gogogo = function(){
	console.log('silently vrooms');
};

cats[3];

truck['model'];
truck.['number Of Wheels']


var cars=[
	car,
	{
		make:'Dodge',
		model:'Challenger',
		year:'2015',
		report: function(){
			console.log(this.year+' '+this.make+' '+this.model);
		}
	},
	{
		make:'Ford',
		model:'Shelby GT 500',
		year:1969,
		report: function(){
			console.log(this.year+' '+this.make+' '+this.model);
		}
	},
	{
		make:'Cadillac',
		model:'Escalade',
		year:2019,
		report: function(){
			console.log(this.year+' '+this.make+' '+this.model);
		}
	}
];
car.report = function(){
		console.log(this.year+' '+this.make+' '+this.model);
};

cars.forEach(function(car){
	car.report();
});