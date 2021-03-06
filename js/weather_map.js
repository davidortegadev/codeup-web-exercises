
let defaultLong = 29.426787;
let defaultLat = -98.489599;

//weather query
function weatherUpdate(long, lat) {
	$.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darSkyKey + '/'+long+','+lat).done(function (data) {
		console.log(data);

		let currentTemp = data.currently.temperature;
		let currentTempFeel = data.currently.apparentTemperature;
		let currentSummary = data.currently.summary;
		let currentDate = new Date(data.currently.time * 1000);
		let todaySummary = data.daily.data[0].summary;
		let todayHigh = data.daily.data[0].temperatureHigh;
		let todayLow = data.daily.data[0].temperatureLow;
		let todayIcon = data.currently.icon;
		let todayShortDay = currentDate.toString().substr(0, 3);
		let todayShortMonth = currentDate.toString().substr(4, 3);
		let todayRainChance = data.daily.data[0].precipProbability;

		let tomorrowIcon = data.daily.data[1].icon;
		let tomorrowDate = new Date(data.daily.data[1].time*1000);
		let tomorrowShortDay = tomorrowDate.toString().substr(0,3);
		let tomorrowShortMonth = tomorrowDate.toString().substr(4,3);
		let tomorrowHigh = data.daily.data[1].temperatureHigh;
		let tomorrowLow = data.daily.data[1].temperatureLow;
		let tomorrowSummary = data.daily.data[1].summary;
		let tomorrowRainChance = data.daily.data[1].precipProbability;

		function weatherIcon(dataIcon) {
			for (var i = 0; i < iconArray.length; i++) {
				if (iconArray[i].conditions === dataIcon) {
					todayIconFinal = iconArray[i].icon
				}
			}
		}

		function weatherIconTomorrow(dataIcon) {
			for (var i = 0; i < iconArray.length; i++) {
				if (iconArray[i].conditions === dataIcon) {
					tomorrowIcon = iconArray[i].icon
				}
			}
		}

		weatherIcon(todayIcon);
		weatherIconTomorrow(tomorrowIcon);

		$('#currentTemp').html(humanize(parseInt(currentTemp)));
		$('#currentTempFeel').html(humanize(parseInt(currentTempFeel)));
		$('#currentSummary').html(currentSummary.toLowerCase());
		$('#currentDate').html(fullDay(todayShortDay) + ', ' + fullMonth(todayShortMonth) + ' ' + stringifyNumber(parseInt(currentDate.toString().substring(8, 10))));
		$('#todaySummary').html(todaySummary.toLowerCase());
		$('#todayHigh').html(humanize(parseInt(todayHigh)));
		$('#todayLow').html(humanize(parseInt(todayLow)));
		$('#todayWeatherIcon').html(todayIconFinal);
		$('#todayRainChance').html(humanize(parseInt(todayRainChance*100)));


		$('#tomorrowWeatherIcon').html(tomorrowIcon);
		$('#tomorrowDate').html(fullDay(tomorrowShortDay) + ', '+fullMonth(tomorrowShortMonth)+' '+stringifyNumber(parseInt(tomorrowDate.toString().substring(8,10))));
		$('#tomorrowHigh').html(humanize(parseInt(tomorrowHigh)));
		$('#tomorrowLow').html(humanize(parseInt(tomorrowLow)));
		$('#tomorrowSummary').html(tomorrowSummary.toLowerCase());
		$('#tomorrowRainChance').html(humanize(parseInt(tomorrowRainChance*100)));

		let day0Date = new Date(data.daily.data[0].time*1000);
		let day0ShortDay = day0Date.toString().substr(0,3);
		let day1Date = new Date(data.daily.data[1].time*1000);
		let day1ShortDay = day1Date.toString().substr(0,3);
		let day2Date = new Date(data.daily.data[2].time*1000);
		let day2ShortDay = day2Date.toString().substr(0,3);
		let day3Date = new Date(data.daily.data[3].time*1000);
		let day3ShortDay = day3Date.toString().substr(0,3);
		let day4Date = new Date(data.daily.data[4].time*1000);
		let day4ShortDay = day4Date.toString().substr(0,3);
		let day5Date = new Date(data.daily.data[5].time*1000);
		let day5ShortDay = day5Date.toString().substr(0,3);
		let day6Date = new Date(data.daily.data[6].time*1000);
		let day6ShortDay = day6Date.toString().substr(0,3);
		$('#day0Date').html(fullDay(day0ShortDay));
		$('#day1Date').html(fullDay(day1ShortDay));
		$('#day2Date').html(fullDay(day2ShortDay));
		$('#day3Date').html(fullDay(day3ShortDay));
		$('#day4Date').html(fullDay(day4ShortDay));
		$('#day5Date').html(fullDay(day5ShortDay));
		$('#day6Date').html(fullDay(day6ShortDay));

		let day0Summary = data.daily.data[0].summary;
		let day1Summary = data.daily.data[1].summary;
		let day2Summary = data.daily.data[2].summary;
		let day3Summary = data.daily.data[3].summary;
		let day4Summary = data.daily.data[4].summary;
		let day5Summary = data.daily.data[5].summary;
		let day6Summary = data.daily.data[6].summary;
		$('#day0Summary').html(day0Summary.toLowerCase());
		$('#day1Summary').html(day1Summary.toLowerCase());
		$('#day2Summary').html(day2Summary.toLowerCase());
		$('#day3Summary').html(day3Summary.toLowerCase());
		$('#day4Summary').html(day4Summary.toLowerCase());
		$('#day5Summary').html(day5Summary.toLowerCase());
		$('#day6Summary').html(day6Summary.toLowerCase());

		let day0Rain = data.daily.data[0].precipProbability;
		let day1Rain = data.daily.data[1].precipProbability;
		let day2Rain = data.daily.data[2].precipProbability;
		let day3Rain = data.daily.data[3].precipProbability;
		let day4Rain = data.daily.data[4].precipProbability;
		let day5Rain = data.daily.data[5].precipProbability;
		let day6Rain = data.daily.data[6].precipProbability;
		$('#day0Rain').html(parseInt(day0Rain*100)+'%');
		$('#day1Rain').html(parseInt(day1Rain*100)+'%');
		$('#day2Rain').html(parseInt(day2Rain*100)+'%');
		$('#day3Rain').html(parseInt(day3Rain*100)+'%');
		$('#day4Rain').html(parseInt(day4Rain*100)+'%');
		$('#day5Rain').html(parseInt(day5Rain*100)+'%');
		$('#day6Rain').html(parseInt(day6Rain*100)+'%');

		let day0High = data.daily.data[0].temperatureHigh;
		let day0Low = data.daily.data[0].temperatureLow;
		let day1High = data.daily.data[1].temperatureHigh;
		let day1Low = data.daily.data[1].temperatureLow;
		let day2High = data.daily.data[2].temperatureHigh;
		let day2Low = data.daily.data[2].temperatureLow;
		let day3High = data.daily.data[3].temperatureHigh;
		let day3Low = data.daily.data[3].temperatureLow;
		let day4High = data.daily.data[4].temperatureHigh;
		let day4Low = data.daily.data[4].temperatureLow;
		let day5High = data.daily.data[5].temperatureHigh;
		let day5Low = data.daily.data[5].temperatureLow;
		let day6High = data.daily.data[6].temperatureHigh;
		let day6Low = data.daily.data[6].temperatureLow;

		$('#day0High').html(humanize(parseInt(day0High)));
		$('#day0Low').html(humanize(parseInt(day0Low)));
		$('#day1High').html(humanize(parseInt(day1High)));
		$('#day1Low').html(humanize(parseInt(day1Low)));
		$('#day2High').html(humanize(parseInt(day2High)));
		$('#day2Low').html(humanize(parseInt(day2Low)));
		$('#day3High').html(humanize(parseInt(day3High)));
		$('#day3Low').html(humanize(parseInt(day3Low)));
		$('#day4High').html(humanize(parseInt(day4High)));
		$('#day4Low').html(humanize(parseInt(day4Low)));
		$('#day5High').html(humanize(parseInt(day5High)));
		$('#day5Low').html(humanize(parseInt(day5Low)));
		$('#day6High').html(humanize(parseInt(day6High)));
		$('#day6Low').html(humanize(parseInt(day6Low)));



	});
}
weatherUpdate(defaultLong,defaultLat);

// tab logic
function openTab(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tab");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
//default tab
document.getElementById("defaultOpen").click();

//days of the week to full days
function fullDay(shortDay){
	if(shortDay==='Fri'||shortDay==='Sun'||shortDay==='Mon'){
		return shortDay.toLowerCase()+'day'
	} else if(shortDay==='Tue'){
		return 'tuesday'
	} else if(shortDay==='Wed'){
		return 'wednesday'
	} else if(shortDay==='Thu'){
		return 'thursday'
	} else {
		return 'saturday'
	}
}
//months lengthened
function fullMonth(shortMonth){
	if(shortMonth==='Jan'){
		return 'january'
	} else if (shortMonth==='Feb'){
		return 'february'
	} else if (shortMonth==='Mar'){
		return 'march'
	}else if (shortMonth==='Apr'){
		return 'april'
	}else if (shortMonth==='May'){
		return 'may'
	}else if (shortMonth==='Jun'){
		return 'june'
	}else if (shortMonth==='Jul'){
		return 'july'
	}else if (shortMonth==='Aug'){
		return 'august'
	}else if (shortMonth==='Sep'){
		return 'september'
	}else if (shortMonth==='Oct'){
		return 'october'
	}else if (shortMonth==='Nov'){
		return 'november'
	}else if (shortMonth==='Dec'){
		return 'december'
	}
}

//podium placements from https://stackoverflow.com/questions/20425771/how-to-replace-1-with-first-2-with-second-3-with-third-etc
var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
var deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function stringifyNumber(n) {
	if (n < 20) return special[n];
	if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
	return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}

// icons to img
const iconArray =
	[
		{
			'conditions': 'clear-day',
			'icon': '                            %%%                            \n' +
				'                           %%%%%                           \n' +
				'                           %%%%%                           \n' +
				'                           %%%%%                           \n' +
				'         %%%               %%%%%               %%%         \n' +
				'        %%%%%%                               %%%%%%        \n' +
				'         %%%%%%%                           %%%%%%%         \n' +
				'           %%%%%                           %%%%%           \n' +
				'             ,         %%%%%%%%%%%%%         .             \n' +
				'                    %%%%%%%%%%%%%%%%%%%                    \n' +
				'                  %%%%%%%%       %%%%%%%%                  \n' +
				'                 %%%%%%             %%%%%%                 \n' +
				'                %%%%%                 %%%%%                \n' +
				'               %%%%%                   %%%%%               \n' +
				'%%%%%%%%%*     %%%%%                   %%%%%     (%%%%%%%%%\n' +
				'%%%%%%%%%%     %%%%%                   %%%%%     %%%%%%%%%%\n' +
				'               %%%%%                   %%%%%               \n' +
				'               .%%%%%                 %%%%%                \n' +
				'                %%%%%%              .%%%%%%                \n' +
				'                  %%%%%%%         %%%%%%%                  \n' +
				'                   #%%%%%%%%%%%%%%%%%%%#                   \n' +
				'                      %%%%%%%%%%%%%%%                      \n' +
				'           %%%%%                           %%%%%           \n' +
				'         %%%%%%%                           %%%%%%%         \n' +
				'        %%%%%%                               %%%%%%        \n' +
				'        .%%%               %%%%#               %%%         \n' +
				'                           %%%%%                           \n' +
				'                           %%%%%                           \n' +
				'                           %%%%%                           \n' +
				'                            %%%                            \n'
		}, {
		'conditions': 'clear-night',
		'icon': '                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                           .*.                             \n' +
			'                    %%%%%%%%%%%(                           \n' +
			'                 %%%%%%%%%%%%%%(                           \n' +
			'               %%%%%%%%%%%%%%%%%                           \n' +
			'              %%%%%%%%    %%%%%%%                          \n' +
			'             %%%%%%%       %%%%%%%                         \n' +
			'            %%%%%%          %%%%%%%%                       \n' +
			'           %%%%%%            ,%%%%%%%%%                    \n' +
			'           %%%%%%              %%%%%%%%%%%%%%%             \n' +
			'           %%%%%%                 %%%%%%%%%%%%             \n' +
			'           %%%%%%                     *%%%%%%%             \n' +
			'           %%%%%%#                     /%%%%%%             \n' +
			'            %%%%%%#                   *%%%%%%              \n' +
			'             %%%%%%%                 %%%%%%%               \n' +
			'              %%%%%%%%%           %%%%%%%%%                \n' +
			'                %%%%%%%%%%%%%%%%%%%%%%%%%                  \n' +
			'                  %%%%%%%%%%%%%%%%%%%%%                    \n' +
			'                     .%%%%%%%%%%%%%,                       \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n'
	}, {
		'conditions': 'rain',
		'icon': '                                                           \n' +
			'               %%%%%%%%%%%%%                               \n' +
			'          .%%%%%%%%%%%%%%%%%%%%%*                          \n' +
			'        %%%%%%%%%%%%(/(%%%%%%%%%%%%                        \n' +
			'      %%%%%%%%               %%%%%%%%                      \n' +
			'    (%%%%%%                     %%%%%%#                    \n' +
			'   %%%%%%                         %%%%%%%%%%%%%.           \n' +
			'  #%%%%%                           %%%%%%%%%%%%%%%%        \n' +
			'  %%%%%                             %%%%%%%%%%%%%%%%%      \n' +
			' %%%%%(                                         %%%%%%%    \n' +
			' %%%%%                                            %%%%%%   \n' +
			' %%%%%                                             %%%%%%  \n' +
			' %%%%%                                              %%%%%  \n' +
			' .%%%%%                                             %%%%%. \n' +
			'  %%%%%%         %%%%                %%%%%          %%%%%  \n' +
			'   %%%%%%       (%%%%(               %%%%%          %%%%%  \n' +
			'    %%%%%%.     (%%%%(      %%*      %%%%%         %%%%%.  \n' +
			'     #%%%%%     (%%%%(     %%%%%     %%%%%       %%%%%%,   \n' +
			'       %%%%      %%%%      %%%%%      %%%      %%%%%%%     \n' +
			'         .%                %%%%%               %%%%%       \n' +
			'                           %%%%%               %%*         \n' +
			'                  ##                  .%.                  \n' +
			'                /%%%%*               %%%%%                 \n' +
			'                (%%%%(               %%%%%                 \n' +
			'                (%%%%(     %%%%      %%%%%                 \n' +
			'                /%%%%/     %%%%%     %%%%%                 \n' +
			'                  %%       %%%%%      .%.                  \n' +
			'                           %%%%%                           \n' +
			'                           %%%%.                           \n' +
			'                                                           \n'
	}, {
		'conditions': 'snow',
		'icon': '                  #%%%%%(                                  \n' +
			'            %%%%%%%%%%%%%%%%%%%                            \n' +
			'         %%%%%%%%%%%%%%%%%%%%%%%%%                         \n' +
			'       %%%%%%%%#           %%%%%%%%%                       \n' +
			'     %%%%%%%                   %%%%%%%                     \n' +
			'    %%%%%%                       %%%%%%  ,,                \n' +
			'   %%%%%                          %%%%%%%%%%%%%%%(         \n' +
			'  %%%%%                            #%%%%%%%%%%%%%%%%       \n' +
			' %%%%%%                             %%        %%%%%%%%     \n' +
			' %%%%%                                           %%%%%%    \n' +
			' %%%%%                                             %%%%%   \n' +
			' %%%%%                                              %%%%%  \n' +
			' %%%%%*                                             %%%%%  \n' +
			'  %%%%%                                             %%%%%  \n' +
			'  %%%%%%                    .,                      %%%%%  \n' +
			'   %%%%%%/                .%%%%%                   %%%%%#  \n' +
			'    .%%%%%%,         /%.  ,%%%%%   %#             %%%%%%   \n' +
			'      %%%%%%%%      %%%%%%%%%%%%%%%%%%         (%%%%%%%    \n' +
			'        %%%%%%      /%%%%%%%  #%%%%%%%      /%%%%%%%%      \n' +
			'           %%%          %%/     %%/         /%%%%%%        \n' +
			'                     %%%%%%    %%%%%%       /%%            \n' +
			'                    %%%%%%%%%%%%%%%%%%                     \n' +
			'                     %%%  ,%%%%%  %%%,                     \n' +
			'                          ,%%%%%                           \n'
	}, {
		'conditions': 'sleet',
		'icon' : '                                                           \n' +
			'              ,%%%%%%%%%%%%%%#                             \n' +
			'           %%%%%%%%%%%%%%%%%%%%%%(                         \n' +
			'        %%%%%%%%%%#      *%%%%%%%%%%                       \n' +
			'      %%%%%%%%                %%%%%%%%                     \n' +
			'     %%%%%%.                     %%%%%%                    \n' +
			'    %%%%%%                        *%%%%%%%%%%%%%(          \n' +
			'   %%%%%,                           %%%%%%%%%%%%%%%%       \n' +
			'  %%%%%%                             %%%%. .#%%%%%%%%%     \n' +
			'  %%%%%                                          %%%%%%%   \n' +
			'  %%%%%                                            %%%%%%  \n' +
			'  %%%%%                                             %%%%%, \n' +
			'  %%%%%                                              %%%%% \n' +
			'  %%%%%%                                             %%%%% \n' +
			'   %%%%%.         %%%                  %%            %%%%% \n' +
			'    %%%%%%        %%%                  %%           %%%%%# \n' +
			'     %%%%%%       %%%        %%        %%          %%%%%%  \n' +
			'      %%%%%%      %%%       .%%        %%        %%%%%%%   \n' +
			'        %%%%      %%%       .%%        %%       %%%%%%.    \n' +
			'           %      %%%       .%%        %%       %%%%,      \n' +
			'                  %%%       .%%        %%       %          \n' +
			'                            .%%                            \n' +
			'                            .%%                            \n' +
			'                             %%                            \n' +
			'                 %%%%%                %%%%                 \n' +
			'                 %%%%%                %%%%#                \n' +
			'                             %%                            \n' +
			'                           %%%%%                           \n' +
			'                            %%%%                           \n'
	}, {
		'conditions': 'wind',
		'icon': '                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                   %%%%%%%#                \n' +
			'                                   %%%%%%%%%*              \n' +
			'                                       %%%%%%.    %%%,     \n' +
			'                                        #%%%%%  /%%%%%%%%  \n' +
			'                                        %%%%%#   %%%%%%%%% \n' +
			'    (%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%        %%%%%%\n' +
			'  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%,          %%%%%\n' +
			' %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%            *%%%%%%\n' +
			'%%%%%%                                       %%%%%%%%%%%%% \n' +
			'%%%%%%                                       %%%%%%%%%%%   \n' +
			' %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(                   \n' +
			'  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                \n' +
			'    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%              \n' +
			'                                        %%%%%#             \n' +
			'                                        #%%%%%             \n' +
			'                                       %%%%%%,             \n' +
			'                                   %%%%%%%%%#              \n' +
			'                                   %%%%%%%%                \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n'
	}, {
		'conditions':'fog',
		'icon': '                                                           \n' +
			'                                                           \n' +
			'              (%%%%%%%%%%%%%.                              \n' +
			'          #%%%%%%%%%%%%%%%%%%%%%.                          \n' +
			'       *%%%%%%%%%%%%#(#%%%%%%%%%%%%                        \n' +
			'     *%%%%%%%%               %%%%%%%%                      \n' +
			'    %%%%%%%                     %%%%%%%                    \n' +
			'   %%%%%%                         %%%%%%%%%%%%#            \n' +
			'  %%%%%%                           %%%%%%%%%%%%%%%%        \n' +
			' %%%%%%                             %%%%%%%%%%%%%%%%%#     \n' +
			' %%%%%                                         ,%%%%%%%    \n' +
			'#%%%%#                                            %%%%%%/  \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			' %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%* \n' +
			'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \n' +
			' *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  \n' +
			'                                                           \n' +
			'                                                           \n' +
			' .%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  \n' +
			'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \n' +
			' %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%( \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \n' +
			'.%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \n' +
			'                                                           \n' +
			'                                                           \n'
	}, {
		'conditions': 'cloudy',
		'icon': '                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'              %%%%%%%%%%%%%%                               \n' +
			'          %%%%%%%%%%%%%%%%%%%%%%                           \n' +
			'       %%%%%%%%%%%%%%%%%%%%%%%%%%%%                        \n' +
			'     %%%%%%%%%              /%%%%%%%%                      \n' +
			'   %%%%%%%%                    /%%%%%%%                    \n' +
			'  %%%%%%%                        (%%%%%%%%%%%%,            \n' +
			' %%%%%%                            %%%%%%%%%%%%%%%%        \n' +
			'/%%%%%                              %%%%%%%%%%%%%%%%%%     \n' +
			'%%%%%(                               %         %%%%%%%%*   \n' +
			'%%%%%                                             %%%%%%%  \n' +
			'%%%%%                                               %%%%%% \n' +
			'%%%%%                                                %%%%% \n' +
			'%%%%%                                                %%%%%%\n' +
			'%%%%%%                                               %%%%%%\n' +
			' %%%%%%                                              %%%%%%\n' +
			'  %%%%%%                                            (%%%%% \n' +
			'   %%%%%%%                                         %%%%%%, \n' +
			'    #%%%%%%%*                                    (%%%%%%.  \n' +
			'      %%%%%%%%%%%,                           *%%%%%%%%%    \n' +
			'         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%      \n' +
			'            (%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%         \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n' +
			'                                                           \n'
	}, {
		'conditions': 'partly-cloudy-day',
		'icon': '                               %%%                         \n' +
			'                              %%%%%                        \n' +
			'                              %%%%%                        \n' +
			'                              %%%%%                        \n' +
			'             %%%%%              *              %%%%%       \n' +
			'              %%%%%%                         %%%%%%        \n' +
			'                %%%%%                       %%%%%          \n' +
			'                          %%%%%%%%%%%%%                    \n' +
			'                       .%%%%%%%%%%%%%%%%%%                 \n' +
			'           %%%%%%%%%%%%%%%%%         %%%%%%                \n' +
			'       %%%%%%%%%%%%%%%%%%%%            %%%%%,              \n' +
			'     %%%%%%%#         %%%%%%%%           %%%%              \n' +
			'   %%%%%%                %%%%%%          %%%%%     %%%%%%% \n' +
			'  %%%%%                    %%%%%%%%%%%   %%%%%    %%%%%%%%%\n' +
			' %%%%%                       %%%%%%%%%%%%%%%%,             \n' +
			'%%%%%                         %%%*  %%%%%%%%%              \n' +
			'%%%%                                    (%%%%%             \n' +
			'%%%%                                      %%%%%            \n' +
			'%%%%                                       %%%%%           \n' +
			'%%%%%                                      /%%%%           \n' +
			' %%%%                                      %%%%%           \n' +
			' ,%%%%%                                    %%%%.           \n' +
			'   %%%%%.                                 %%%%%            \n' +
			'    %%%%%%%                            ,%%%%%%             \n' +
			'      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%               \n' +
			'         ,%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                  \n'
	}, {
		'conditions': 'partly-cloudy-night',
		'icon': '                                                           \n' +
			'                                                           \n' +
			'                                   /%%%%%%                 \n' +
			'                                %%%%%%%%%%                 \n' +
			'                              %%%%%%%,%%%%                 \n' +
			'                            %%%%%%    %%%%%                \n' +
			'               %%%%%%%%%%%%%%%%%       %%%%%%              \n' +
			'           %%%%%%%%%%%%%%%%%%%%          %%%%%%%(   .      \n' +
			'         %%%%%%%%        %%%%%%%%          %%%%%%%%%%      \n' +
			'       %%%%%%                %%%%%%           /%%%%%%      \n' +
			'      %%%%%                    %%%%%%%%%%       %%%%       \n' +
			'     %%%%%                      %%%%%%%%%%%%%%%%%%%#       \n' +
			'    %%%%%                        %%%%%%%%%%%%%%%%%         \n' +
			'    %%%%                                    %%%%%%         \n' +
			'   .%%%%                                      %%%%%        \n' +
			'    %%%%                                       %%%%        \n' +
			'    %%%%                                       %%%%%       \n' +
			'    %%%%%                                      %%%%%       \n' +
			'     %%%%%                                     %%%%        \n' +
			'      %%%%%%                                  %%%%%        \n' +
			'        %%%%%%%                             %%%%%%         \n' +
			'          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%           \n' +
			'             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/             \n' +
			'                    *//////////////////,                   \n' +
			'                                                           \n' +
			'                                                           \n'
	}
	];

// numbers to words from https://gist.github.com/ForbesLindesay/5467742
function humanize(num){
	var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
		'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
		'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
		'ninety'];
	var numString = num.toString();
	// if (num < 0) throw new Error('Negative numbers are not supported.');
	if (num < 0) return ''+num;

	if (num === 0) return 'zero';
	//the case of 1 - 20
	if (num < 20) {
		return ones[num];
	}
	if (numString.length === 2) {
		return tens[numString[0]] + ' ' + ones[numString[1]];
	}
	//100 and more
	if (numString.length == 3) {
		if (numString[1] === '0' && numString[2] === '0')
			return ones[numString[0]] + ' hundred';
		else
			return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
	}
	if (numString.length === 4) {
		var end = +(numString[1] + numString[2] + numString[3]);
		if (end === 0) return ones[numString[0]] + ' thousand';
		if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
		return ones[numString[0]] + ' thousand ' + convert(end);
	}
}

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

