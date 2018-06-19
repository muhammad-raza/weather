$(document).ready(function(){
	
	// all logic to populate html goes here. 
	// no need to set day1, day2 as the returned list is sorted by day. 
	// so first result is always day1 and so on.
	function populateWeatherData(weatherData) {

		$.each(weatherData.consolidated_weather,function(index, consolidatedWeather){
			
			var image = $('<img />')
			image.src = 'https://www.metaweather.com/static/img/weather/'+consolidatedWeather.weather_state_abbr+'.svg';

			var applicableDate = $('<div></div>');
			applicableDate.text(consolidatedWeather.applicable_date)

			var weatherState = $('<div></div>');
			weatherState.text(consolidatedWeather.weather_state_name)			

			$('.weather-forecast')
			.append('<li></li>')
			.append(image)
			.append(applicableDate)
			.append(weatherState)			
								
		}); 

	}

	// hard-coded "Manchester" for now. will be replaced by $('#text_box').val()
	var userLocationInput = "Manchester";

	var weatherService = new WeatherService();
	
	weatherService.getForcast(userLocationInput)
		.done(function(cities){
			weatherService.getForcastFromLocationData(cities)
				.done(populateWeatherData)
		});
});	