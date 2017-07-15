/*jshint esversion:6*/
HourlyWeatherController.$inject=['WeatherService'];

function HourlyWeatherController(weather) {
  this.lat = 0;
  this.lon = 0;

  this.search = function search() {
    weather.getHourlyWeather(this.lat, this.lon)
           .then(hourlyWeather => this.hourlyWeather = hourlyWeather)
           .then(_ => console.log(this.hourlyWeather));
  };

}

module.exports = HourlyWeatherController;
