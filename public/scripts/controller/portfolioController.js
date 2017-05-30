'use strict';

var app = app || {};

(function(module){
  var PortfolioController = {};
  PortfolioController.init = () => {
    app.Project.getData(app.PortfolioView.index)
  }
  PortfolioController.nav = (ctx, next) => {
    location.href = '#portfolio';
    if(next) next();
  }

  PortfolioController.init(app.PortfolioView.index);
  module.PortfolioController = PortfolioController;
})(app);