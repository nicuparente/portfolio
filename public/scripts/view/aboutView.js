'use strict';

var app = app || {};

(function(module){
  var AboutView = {};

  AboutView.index = () => location.href = '#about'
  AboutView.init = () => $('.github-stat').text(`Total Repos Contributed: ${app.repos.all.length}`)

  module.AboutView = AboutView;
})(app);