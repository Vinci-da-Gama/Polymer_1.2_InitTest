(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['polymerOne.router', 'polymerOne.ctrl'];
	var cons = ['polymerOne.constant'];
	var serv = ['polymerOne.sig.service', 'polymerOne.service'];
	var dir = ['polymerOne.dir', 'polymerOne.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* polymerOne Module
	*
	* The main module of this application...
	*/
	angular.module('polymerOne', depedencyArr);

	angular.module('polymerOne.router', ['ui.router']);
	angular.module('polymerOne.constant', []);
	angular.module('polymerOne.sig.service', []);
	angular.module('polymerOne.service', []);
	angular.module('polymerOne.ctrl', []);
	angular.module('polymerOne.dir', ['polymerOne.service', 'polymerOne.sig.service']);
	angular.module('polymerOne.cust.dir', ['polymerOne.service', 'polymerOne.sig.service']);

})();