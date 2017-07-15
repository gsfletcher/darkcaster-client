/*jshint esversion:6*/
// const clearDay = require('../../images/clear-day.png');
CurrentWeatherController.$inject = ['WeatherService', 'ImageService']; //magic for us

function CurrentWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat, this.lon) // this is a promise to get the weather data back some time in the future, or not
           .then(currentWeather => this.weatherData =currentWeather);
  };           //assigns currentWeather to weatherData

}
module.exports= CurrentWeatherController;
