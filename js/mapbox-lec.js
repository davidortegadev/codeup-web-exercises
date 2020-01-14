/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
	container: 'map',
	// style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
	style: 'mapbox://styles/davidortegadev/ck58diazb0gl71cp59b5bfrwd',
	zoom: 13,
	center: [-98.496585, 29.460461]
});

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker
// var markerOptions = {
// 	color:'red',
// 	draggable: true
// };

// var marker = new mapboxgl.Marker(markerOptions)
// 	.setLngLat([-98.4861, 29.4260])
// 	.addTo(map);


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

// var popup = new mapboxgl.Popup()
// 	.setLngLat([-98.489615, 29.426827])
// 	.setHTML("<h1>Codeup Rocks!</h1>")
// 	.addTo(map);

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"

// var alamoPopup = new mapboxgl.Popup()
// 	.setHTML("<p>Remember The Alamo!</p>")
// 	.addTo(map);
//
// marker.setPopup(alamoPopup);

/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.

// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
// 	container: 'map',
// 	style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
// 	zoom: 10,
// 	center: [-98.4916, 29.4252]
// });

// geocode('the white house',mapboxToken).then(function(result){
// 	console.log(result);
// 	//recenter the map
// 	//add a marker
// 	map.setCenter(result);
// 	map.setZoom(15);
// });

//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

// reverseGeocode({lng:-98.4861, lat:29.4260}, mapboxToken).then(result){
// 	console.log(result)
// }

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

// ***********
// exercise
// ***********


// var mingsPopup = new mapboxgl.Popup()
// 	.setHTML("<p>Ming's Noodle Bar</p>");
//
// var mingsMarker = new mapboxgl.Marker()
// 	.setLngLat([-98.492351, 29.479776])
// 	.setPopup(mingsPopup)
// 	.addTo(map);
//
// var cullumsPopup = new mapboxgl.Popup()
// 	.setHTML("<p>Cullum's Attagirl</p>");
//
// var cullumsMarker = new mapboxgl.Marker()
// 	.setLngLat([-98.485087, 29.453191])
// 	.setPopup(cullumsPopup)
// 	.addTo(map);
//
// var nikisPopup = new mapboxgl.Popup()
// 	.setHTML("<p>Niki's Tokyo Inn</p>");
//
// var nikisMarker = new mapboxgl.Marker()
// 	.setLngLat([-98.507010, 29.466662])
// 	.setPopup(nikisPopup)
// 	.addTo(map);

var restaurants = [
	{
		name: 'Ming\'s Noodle Bar',
		coords: [-98.492351, 29.479776],
		text: 'Intimate nook offering Chinese street food favorites like bao & noodle dishes in a chill setting.'
	},
	{
		name: 'Cullum\'s Attagirl',
		coords: [-98.485087, 29.453191],
		text: 'Popular fried chicken specialist turning out plates & sandwiches, plus craft beer, in rustic digs.'
	},
	{
		name: 'Niki\'s Tokyo Inn',
		coords: [-98.507010, 29.466662],
		text: 'Unassuming family-run mainstay with traditional sushi, Japanese entrees, sake & tatami-style dining.'
	}
	];

restaurants.forEach(function(restaurant){
	var popupEvent = new mapboxgl.Popup()
		.setHTML('<h1 style="text-align: center">'+restaurant.name+'</h1>'+'\n'+restaurant.text);
	var markerEvent = new mapboxgl.Marker()
		.setLngLat(restaurant.coords)
		.setPopup(popupEvent)
		.addTo(map);
});