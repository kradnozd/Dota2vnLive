var app = angular.module("d2vnLive", []);

app.config(function($routeProvider) {
    $routeProvider
    	.when('/', 
    	{
			templateUrl: "view/matches.html",	
    	})
		.when('/match/:matchId',
		{
			templateUrl: "view/single-match.html",
			controller: "showMatchController"
		})
});

app.controller("showMatchController", function($scope, $routeParams) {
    $scope.match_id = $routeParams.matchId;
});