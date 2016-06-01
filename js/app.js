var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when ('/home', {
    templateUrl: 'partials/home.html',
    controller: 'homeController'
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
  when('/faq', {
    templateUrl: 'partials/faq.html',
    controller: 'faqController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);