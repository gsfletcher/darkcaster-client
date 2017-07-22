/*jshint esversion:6*/
HourlyWeatherController.$inject=['ImageService'];

function HourlyWeatherController(images) {
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
}

module.exports = HourlyWeatherController;
