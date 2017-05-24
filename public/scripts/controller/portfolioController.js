'use strict';

var app = app || {};

(function(module){
  var PortfolioController = {};
  PortfolioController.init = () => {
    app.Project.getData(app.PortfolioView.index)
  }
  PortfolioController.nav = () => {
    location.href = '#portfolio';
  }

  module.PortfolioController = PortfolioController;
})(app);