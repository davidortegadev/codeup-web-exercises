mapboxgl.accessToken = mapboxWeatherToken;
var map = new mapboxgl.Map({
	container: 'map',
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
	//execute weather update
	weatherUpdate(lngLat.lat,lngLat.lng);
}

marker.on('dragend', onDragEnd);


function geocode(search, token) {
	var baseUrl = 'https://api.mapbox.com';
	var endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
		.then(function (res) {
			console.log(res);
			return res.json();
			// to get all the data from the request, comment out the following three lines...
		}).then(function (data) {
			return data.features[0].center;
		});
}

function reverseGeocode(search, token) {
	var baseUrl = 'https://api.mapbox.com';
	var endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(baseUrl + endPoint + search + '.json' + "?" + 'access_token=' + token)
		.then(function (res) {
			console.log(res);
			return res.json();
			// to get all the data from the request, comment out the following three lines...
		})
}

$('#submitSearch').click(function(e){
		e.preventDefault();
		var userPlace = $('#searchBar').val();
		geocode(userPlace, mapboxWeatherToken).then(function (result) {
			let geocodeLat = result[1].toString();
			let geocodeLong = result[0].toString();

			marker.setLngLat({lat: geocodeLat, lng: geocodeLong});
			map.setCenter({lat: geocodeLat, lng: geocodeLong});
			map.setZoom(8);
			// console.log(result);
			reverseGeocode(result.toString(), mapboxWeatherToken).then(function(result2){
				// console.log(result2.features[3].place_name);
				$('#cityName').replaceWith('<h1 id="cityName">'+result2.features[3].place_name+'</h1>')
			});
			weatherUpdate(geocodeLat, geocodeLong)
		});
});

