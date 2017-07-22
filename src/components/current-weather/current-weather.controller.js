/*jshint esversion:6*/
CurrentWeatherController.$inject = ['ImageService']; //magic for us

function CurrentWeatherController(images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

}
module.exports= CurrentWeatherController;
