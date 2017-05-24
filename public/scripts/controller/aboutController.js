'use strict';

var app = app || {};

(function(module){
  var AboutController = {};

  AboutController.nav = () => app.AboutView.index()
  
  module.AboutController = AboutController;

})(app);