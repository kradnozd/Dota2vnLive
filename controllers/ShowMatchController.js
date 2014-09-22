'use strict';

angular.module('d2vnLive')
	.controller('ShowMatchController', function($scope, $routeParams) {
	    $scope.match_id = $routeParams.matchId;
	});