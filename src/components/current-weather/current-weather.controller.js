/*jshint esversion:6*/
const clearDay = require('../../images/clear-day.png');
MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay
  };
  weather.getCurrentWeather(29, -81) // this is a promise to get the weather ata back some time in the future, or might not
         .then(currentWeather => this.weatherData =currentWeather);
}           //assigns currentWeather to weatherData
module.exports= MainController;
