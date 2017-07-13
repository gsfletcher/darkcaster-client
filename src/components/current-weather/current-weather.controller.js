/*jshint esversion:6*/
const clearDay = require('../../images/clear-day.png');
CurrentWeatherController.$inject = ['WeatherService']; //magic for us

function CurrentWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };
  //functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat, this.lon) // this is a promise to get the weather ata back some time in the future, or might not
           .then(currentWeather => this.weatherData =currentWeather);
  };           //assigns currentWeather to weatherData

}
module.exports= CurrentWeatherController;
