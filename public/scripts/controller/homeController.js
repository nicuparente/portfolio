'use strict';

var app = app || {};

(function(module){
  var HomeController = {};

  HomeController.nav = (ctx,next) => {
    location.href = '#home';
    if(next) next();
  }
  module.HomeController = HomeController;

})(app)