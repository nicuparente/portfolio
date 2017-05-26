'use strict';
var app = app || {};

(function (module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function (callback) {
    $.get('/github/user/repos')
      .then(
      data => {
        data.forEach(repo => {
          repos.all.push(repo);
        })

        if(callback) callback()
      });

  };
  repos.requestRepos(app.AboutView.init);
  module.repos = repos;
})(app);
