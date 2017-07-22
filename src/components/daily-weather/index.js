/*jshint esversion:6*/
const template = require('./daily-weather.html');
const controller = require('./daily-weather.controller.js');

const DailyWeatherComponent = {
  template,
  controller,
  bindings: {
    weather: '<'
  }
};

module.exports = DailyWeatherComponent;
