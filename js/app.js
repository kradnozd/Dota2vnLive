var app = angular.module('d2vnLive', ['ngRoute']);

app .config(function($routeProvider) {
	$routeProvider
		.when('/match', {
			templateUrl: '../view/single-match.html',
			controller: 'showMatchController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app .controller('showMatchController', function($scope){
	$scope.model = {
		message: "This is my app!";
	}
});