'use strict';

angular.module('d2vnLive')
	.controller('ShowMatchController', function($scope, $routeParams) {
	    $scope.match_id = $routeParams.matchId;
	})

	.controller('ListMatchController', function($scope, $http){
		$scope.matches = null;

		var link = 'http://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v1/?key=23E1D8D923FF1144379D5042D60EE360&callback=?';
		var q = 'select * from json where url=\"' + link + '\"';
		var fixedQuery = encodeURI(q).replace(/\=/g, '%3D').replace(/\:/g, '%3A').replace(/\//g, '%2F').replace(/\?/g, '%3F').replace(/\&/g, '%26');
		var url = 'http://query.yahooapis.com/v1/public/yql?q=' + fixedQuery + '&format=json';
		$http.get(url, {timeout: 30000})
			.success(function(data) {
				$scope.matches = data.query.results.result.games;
				console.log(data);
			});
		console.log($scope.matches);
		console.log('Mission Done!');
	});