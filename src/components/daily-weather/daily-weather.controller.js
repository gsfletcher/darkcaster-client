/*jshint esversion:6*/
DailyWeatherController.$inject = ['WeatherService'];

function DailyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  this.search = function search(){
    weather.getDailyWeather(this.lat, this.lon)
           .then(dailyWeather => this.dailyWeather = dailyWeather);
  };
}

module.exports = DailyWeatherController;
