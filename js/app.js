var app = angular.module("d2vnLive", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: "view/single-match.html",
        controller: "AppCtrl"
      })
      .when('/pizza', {
        template: "Yum!!"
      }).otherwise({
        template: "This doesn't exist!"
      })
});

app.controller("AppCtrl", function($scope) {

    $scope.model = {
        message: "This is my app!!!"
    }
});