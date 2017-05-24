'use strict';
var app = app || {};

(function (module) {
  function Project(rawProject) {
    Object.keys(rawProject).forEach(key => this[key] = rawProject[key]);
  }

  Project.all = [];

  Project.getData = function (callback) {
    if (localStorage.projects) {
      JSON.parse(localStorage.projects).forEach(function (projectRawData) {
        Project.all.push(new Project(projectRawData));
      });
    }
    else {
      $.getJSON('data/allProjects.json').then(
        function (data) {
          data.forEach(function (projectRawData) {
            Project.all.push(new Project(projectRawData));
          });
          localStorage.projects = JSON.stringify(data);
        },
        function (err) {
          console.log(err)
        });
    }
    if(callback) callback();
  }

  //Word Count for Portfolio 10 Assignment
  Project.stats = () =>{
    let totalWordCount = Project.all.map((project) => {
      return project.description.split(' ').length;
    }).reduce((total, cur) => total+ cur);
    console.log('Total word count on all project descriptions: ' + totalWordCount);
  }
  module.Project = Project;
})(app);

