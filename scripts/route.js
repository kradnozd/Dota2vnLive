var app = angular.module('d2vnLive', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    	.when('/', 
    	{
			templateUrl: 'views/matches.html',	
    	})
		.when('/match/:matchId',
		{
			templateUrl: 'views/single-match.html',
			controller: 'showMatchController'
		})
});

app.controller('showMatchController', function($scope, $routeParams) {
    $scope.match_id = $routeParams.matchId;
});