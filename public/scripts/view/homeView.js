'use strict';

var app = app || {};

(function(module){
  var HomeView = {};

  HomeView.index = () => location.href = '#home'

  module.HomeView = HomeView;
})(app);