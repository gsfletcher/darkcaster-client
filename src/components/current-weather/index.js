/*jshint esversion:6*/
const htmlTemplate = require('./current-weather.html');
const cssTemplate = require('./current-weather.css');
const currentController = require('./current-weather.controller');

const CurrentWeatherComponent = {
  template: htmlTemplate,
  styles: cssTemplate,
  controller: currentController
};

module.exports = CurrentWeatherComponent;
