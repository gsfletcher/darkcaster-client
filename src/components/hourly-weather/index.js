/*jshint esversion:6*/
 const hourlyHtmlTemplate = require('./hourly-weather.html');
 const hourlyController = require('./hourly-weather.controller.js');

 const HourlyWeatherComponent = {
   template: hourlyHtmlTemplate,
   controller: hourlyController
 };

 module.exports = HourlyWeatherComponent;
