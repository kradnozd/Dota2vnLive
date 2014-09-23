'use strict';

angular.module('d2vnLive')
	.controller('ShowMatchController', function($scope, $routeParams) {
	    $scope.match_id = $routeParams.matchId;
	})

	.controller('ListMatchController', function($scope){
		$scope.matches = null;

		var url = 'http://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v1/?key=23E1D8D923FF1144379D5042D60EE360&callback=?';
		$.getJSON('http://query.yahooapis.com/v1/public/yql',
		  {
		    q:      'select * from json where url=\"' + url + '\"',
		    format: 'json'
		  },
		  function(data){
		  	console.log(data);
		  	$scope.matches = data.query.results.result;
		  	i = [0];
		  }
		);
	});