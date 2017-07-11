var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/aboutMe', {
    templateUrl: 'views/about.html',
    controller: 'CodeController as cc'
  }).when('/projects', {
    templateUrl: 'views/projects.html',
    controller: 'CodeController as fc'
  }).when('/repos', {
    templateUrl: 'views/repos.html',
    controller: 'CodeController as fc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});
