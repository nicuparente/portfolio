'use strict';

var app = app || {};

(function (module) {
  var PortfolioView = {};
  let projectRender = Handlebars.compile($('.project-template').html());

  PortfolioView.index = () => {
    $('.portfolio-container').append(app.Project.all.map(projectRender));
  }
  
  module.PortfolioView = PortfolioView;
})(app);
