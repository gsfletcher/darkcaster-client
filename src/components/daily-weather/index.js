/*jshint esversion:6*/
const dailyHtmlTemplate = require('./daily-weather.html');
const dailyController = require('./daily-weather.controller.js');

const DailyWeatherComponent = {
  template: dailyHtmlTemplate,
  controller: dailyController
};

module.exports = DailyWeatherComponent;
