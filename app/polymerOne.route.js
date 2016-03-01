(function () {
	var rM = angular.module('polymerOne.router');

	rM.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './_partials/home.html',
			controller: 'homeCtrl'
		});

	}]);

})();