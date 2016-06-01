var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
<<<<<<< HEAD
  when ('/home', {
    templateUrl: 'partials/home.html',
    controller: 'ListController'
  }).
  
  when ('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'ListController'
  }).

  when('/sponsors', {
    templateUrl: 'partials/sponsors.html',
    controller: 'DetailsController'
  }).
  when('/gallery', {
    templateUrl: 'partials/gallery.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/home'
=======
  when ('/list', {
    templateUrl: 'lib/partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'lib/partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
>>>>>>> 560bdc248f9cc8f316844e23c0be38bb58025c38
  });
}]);