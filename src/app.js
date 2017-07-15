/*jshint esversion:6*/
const angular = require('angular');

// services
const WeatherService = require ('./services/weather.service');
const ImageService = require('./services/image.service');

// components
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./components/hourly-weather/');
const DailyWeatherComponent= require('./components/daily-weather');

//create our application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService) //creates service
       .factory('ImageService', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('dailyWeather', DailyWeatherComponent);
