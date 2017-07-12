/*jshint esversion:6*/
const angular = require('angular');

// services
const WeatherService = require ('./services/weather.service');

// components
const CurrentWeatherComponent = require('./components/current-weather/index.js');

//create our application
angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client') //getter syntax-angular's version of 'require'
       .factory('WeatherService', WeatherService) //creates service
       .component('currentWeather', CurrentWeatherComponent);
