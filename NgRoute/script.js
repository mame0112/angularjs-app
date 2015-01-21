var module = angular.module('mainModule', ['ngRoute']);

module.config(function($routeProvider) {
	$routeProvider
	.when("", {
		controller: 'RootController',
		templateUrl: 'root.html'
	});
	
});

module.controller('RootController', function($scope){
	$scope.message = 'message by Root Controller';
});
