'use strict';

var app = app || {};

(function(module){
  var AboutView = {};

  AboutView.index = () => location.href = '#about'
  module.AboutView = AboutView;
})(app);