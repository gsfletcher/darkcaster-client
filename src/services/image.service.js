/*jshint esversion:6*/
const clearDay = require('../images/clear-day.png');
const clearNight = require('../images/clear-night.png');
const partlyCloudyDay = require('../images/partly-cloudy-night.png');
const partlyCloudyNight = require('../images/partly-cloudy-night.png');
const rain = require('../images/rain.png');
const missingImage = require('../images/missing-image.png');

ImageService.$inject = [];

function ImageService(){
  const imageLookup = {
    'clear-day': clearDay,
    'clear-night': clearNight,
    'partly-cloudy-day': partlyCloudyDay,
    'partly-cloudy-night': partlyCloudyNight,
    'rain': rain
  };
  return {
    lookup: imageLookup,
    missing: missingImage
  };
}

module.exports = ImageService;
