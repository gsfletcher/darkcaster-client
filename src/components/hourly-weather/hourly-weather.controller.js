/*jshint esversion:6*/
HourlyWeatherController.$inject=['WeatherService', 'ImageService'];

function HourlyWeatherController(weather, images) {
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  this.search = function search() {
    weather.getHourlyWeather(this.lat, this.lon)
           .then(hourlyWeather => this.hourlyWeather = hourlyWeather);
  };

}

module.exports = HourlyWeatherController;
