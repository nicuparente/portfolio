'use strict';

var app = app || {};

(function(module){
  var AboutController = {};

  AboutController.nav = (ctx, next) => {
    location.href = '#about';
    if(next) next();
  }

  module.AboutController = AboutController;

})(app);