var d2vnLive = angular.module('d2vnLive', []);

d2vnLive.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/match/:matchID', {
			templateUrl: "../view/single-match.html",
			controller: "showMatchController"
		});
}]);