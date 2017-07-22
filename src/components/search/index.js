/*jshint esversion:6*/
const template = require('./search.html');
const controller = require('./search.controller.js');

const SearchComponent = {
  template,
  controller,
  bindings: {
    search: '&',
    lat: '=',
    lon: '='
  }
};
module.exports = SearchComponent;
