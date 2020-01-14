mapboxgl.accessToken = mapboxWeatherToken;
var map = new mapboxgl.Map({
	container: 'map',
	// style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
	style: 'mapbox://styles/davidortegadev/ck5cq3eti02u71ep850q2wgr8',
	zoom: 5,
	center: [-98.496585, 29.460461]
});

var markerOptions ={
	color: '#FFDF7F',
	draggable:true,
};
var marker = new mapboxgl.Marker(markerOptions)
	.setLngLat([-98.496585, 29.460461])
	.addTo(map);

function onDragEnd() {
	var lngLat = marker.getLngLat();
	//display coords on page
	// $('#coordDisplay').html(
	// 	'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);

	//execute weather update
	weatherUpdate(lngLat.lat,lngLat.lng);
}

marker.on('dragend', onDragEnd);


function geocode(search, token) {
	var baseUrl = 'https://api.mapbox.com';
	var endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
		.then(function (res) {
			return res.json();
			// to get all the data from the request, comment out the following three lines...
		}).then(function (data) {
			return data.features[0].center;
		});
}
// var userPlace = prompt('test');

// $('#submitSearch').click(function(){
// 	// var userPlace = $('#searchBar').toString();
//
// 	function geocode(search, token) {
// 		var baseUrl = 'https://api.mapbox.com';
// 		var endPoint = '/geocoding/v5/mapbox.places/';
// 		return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
// 			.then(function (res) {
// 				return res.json();
// 				// to get all the data from the request, comment out the following three lines...
// 			}).then(function (data) {
// 				return data.features[0].center;
// 			});
// 	}
//
// 	var userPlace = $('#searchBar').toString();
//
// 	geocode(userPlace, mapboxWeatherToken).then(function (result) {
// 		marker.setLngLat(result);
// 		map.setCenter(result);
// 		map.setZoom(8);
// 		console.log(result);
// 	});
// });

$('#submitSearch').click(function(e){
		e.preventDefault();
		var userPlace = $('#searchBar');
		geocode(userPlace, mapboxWeatherToken).then(function (result) {
		marker.setLngLat(result);
		map.setCenter(result);
		map.setZoom(8);
		console.log(result);
	});
	weatherUpdate(lngLat.lat,lngLat.lng);
});

// geocode(userPlace, mapboxWeatherToken).then(function (result) {
// 	marker.setLngLat(result);
// 	map.setCenter(result);
// 	map.setZoom(8);
// 	console.log(result);
// });

