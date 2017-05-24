'use strict';

var app = app || {};

(function(module){
  var HomeController = {};

  HomeController.nav = () => app.HomeView.index()
  module.HomeController = HomeController;

})(app)