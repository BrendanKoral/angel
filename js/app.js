var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.directive('head', ['$rootScope','$compile',
  function($rootScope, $compile){
    return {
      restrict: 'E',
      link: function(scope, elem){
        var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
        elem.append($compile(html)(scope));
        scope.routeStyles = {};
        $rootScope.$on('$routeChangeStart', function (e, next, current) {
          if(current && current.$$route && current.$$route.css){
            if(!angular.isArray(current.$$route.css)){
              current.$$route.css = [current.$$route.css];
            }
            angular.forEach(current.$$route.css, function(sheet){
              delete scope.routeStyles[sheet];
            });
          }
          if(next && next.$$route && next.$$route.css){
            if(!angular.isArray(next.$$route.css)){
              next.$$route.css = [next.$$route.css];
            }
            angular.forEach(next.$$route.css, function(sheet){
              scope.routeStyles[sheet] = sheet;
            });
          }
        });
      }
    };
  }
]);

//Below directive sets the default image in the event that a child doesn't have a picture in the folder

myApp.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});


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
  when('/howwehelp', {
    templateUrl: 'partials/howwehelp.html',
    controller: 'HelpController'
    // css: 'css/rotating-card.css'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);