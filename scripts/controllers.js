'use strict';

angular.module('d2vnLive')
	.controller('ShowMatchController', function($scope, $routeParams) {
	    $scope.match_id = $routeParams.matchId;
	})

	.controller('ListMatchController', function($scope, $http){
		$scope.matchesList = null;

		$http.get('http://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v1/?key=23E1D8D923FF1144379D5042D60EE360')
		.success(function (data) {
			$scope.matchesList = data;
			console.log(data);
		})
		.error(function (data, status, headers, config) {
			//  Do some error handling here
			console.log(error);
		});
	});