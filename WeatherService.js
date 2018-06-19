// no need for document.ready here. its only required for first class to load.
// This is called class. Its only responsible to take user location and return 
// weather information thats all. It don't do any fancy html stuff. 
// please study prototype.

function WeatherService() {
	this.baseUrl = 'https://www.metaweather.com/api/location/';
}

WeatherService.prototype.getForcast = function(location) {
	var that = this;
	return $.ajax({
		url: that.baseUrl + 'search/?query=' + location
	});
}

WeatherService.prototype.getForcastFromLocationData = function(cities) {
	var firstCityInList = cities.shift();
	var that = this;
	if (firstCityInList) {
		return $.ajax({
			url: that.baseUrl + firstCityInList.woeid
		});
	} else {
		throw 'city not found';
	}
}