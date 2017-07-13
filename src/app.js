/*jshint esversion:6*/
const angular = require('angular');

// services
const WeatherService = require ('./services/weather.service');

// components
const CurrentWeatherComponent = require('./components/current-weather/');

//create our application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService) //creates service
       .component('currentWeather', CurrentWeatherComponent);
