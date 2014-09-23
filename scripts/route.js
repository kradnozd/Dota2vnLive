var app = angular.module('d2vnLive', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    	.when('/', 
    	{
			templateUrl: 'views/matches.html',
			controller: 'ListMatchController'
    	})
		.when('/match/:matchId',
		{
			templateUrl: 'views/single-match.html',
			controller: 'ShowMatchController'
		})
});
