var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('lib/js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('lib/js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

  });
}]);

artistControllers.controller('faqController', function($scope) {
  $scope.pageClass = 'page-faq';
});

artistControllers.controller('homeController', function($scope) {
  $scope.pageClass = 'page-home wide';
});

artistControllers.controller('HelpController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/children/children.json').success(function(data) {
    $scope.children = data;
    $scope.whichItem = $routeParams.itemId;
    $scope.default = "default";
  });
}]);

artistControllers.controller('DirectorsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/directors/directors.json').success(function(data) {
    $scope.directors = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);