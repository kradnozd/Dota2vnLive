var app = angular.module('d2vnLive', []);

app.controller('showMatchController', function($scope, $routeParams) {
    $scope.match_id = $routeParams.matchId;
});