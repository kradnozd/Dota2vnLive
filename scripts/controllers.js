'use strict';

angular.module('d2vnLive')
	.controller('ShowMatchController', function($scope, $routeParams) {
	    $scope.match_id = $routeParams.matchId;
	})

	.controller('ListMatchController', function($scope, $http){
		$scope.matches = null;

		var link = 'http://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v1/?key=23E1D8D923FF1144379D5042D60EE360&callback=?';
		var q = 'select * from json where url=\"' + link + '\"';
		var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURI(q) + '&format=json';
		$http.get(json)
			.success(function(data) {
				$scope.matches = data;
				console.log(data);
			});
		console.log($scope.matches);
	});