'use strict';

function Project(rawProject){
  this.name = rawProject.name;
  this.date = rawProject.date;
  this.url = rawProject.url;
  this.description = rawProject.description;
}

Project.all = [];

Project.prototype.toHtml = function(){
  let projectRender = Handlebars.compile($('.project-template').html());
  return projectRender(this);
};

Project.populateProjects = function(){
  if(localStorage.projects){
    JSON.parse(localStorage.projects).forEach(function(projectRawData){
      Project.all.push(new Project(projectRawData));
      $('.portfolio-container').append(Project.all[Project.all.length-1].toHtml());
    });
  }
  else{
    $.getJSON('data/allProjects.json').then(
      function(data){
        data.forEach(function(projectRawData){
          Project.all.push(new Project(projectRawData));
          $('.portfolio-container').append(Project.all[Project.all.length-1].toHtml());
        });
        localStorage.projects = JSON.stringify(data);
      },
      function(err){
        console.log(err)
      });
  }
}
