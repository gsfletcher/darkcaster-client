/*jshint esversion:6*/
const angular = require('angular');
const bootstrap = require('bootstrap/dist/css/bootstrap.css');

// services
const WeatherService = require ('./services/weather.service');
const ImageService = require('./services/image.service');

// components
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./components/hourly-weather/');
const DailyWeatherComponent = require('./components/daily-weather');
const SearchComponent = require('./components/search');
const MainAppComponent = require('./components/main-app');

//create application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService) //creates service
       .factory('ImageService', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('dailyWeather', DailyWeatherComponent)
       .component('getWeather', SearchComponent)
       .component('mainApp', MainAppComponent);
