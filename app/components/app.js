angular.module('app')
.controller('AppCtrl', function (postsService) {

  this.posts = [{title: 'Heres the first post'}];
  postsService.getAll(data => {
    console.log(data)
  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: 'templates/app.html'
})
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'AppCtrl'
    })
    .when('/submit', {
      templateUrl: 'templates/submit.html',
      controller: 'SubmitCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
