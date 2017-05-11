'use strict';

var projects = [];

function Project(rawProject){
  this.title = rawProject.title;
  this.date = rawProject.date;
  this.url = rawProject.url;
  this.description = rawProject.description;
}

Project.prototype.toHtml = function(){
  var projectRender = Handlebars.compile($('.project-template').html());
  return projectRender(this);
};


rawData.forEach(function(projectRawData){
  projects.push(new Project(projectRawData));
});

projects.forEach(function(project){
  $('.portfolio-container').append(project.toHtml());
});
