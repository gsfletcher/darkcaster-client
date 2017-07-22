/*jshint esversion:6*/
WeatherService.$inject = ['$http'];

function WeatherService($http){
  const baseUrl = 'https://dry-eyrie-43885.herokuapp.com/weather/';
  return {
    // label            function name
    get: getAllWeather
  };
  function getAllWeather(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data;
                });
              }
}

module.exports = WeatherService;
