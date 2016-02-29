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
(function () {
	var rM = angular.module('polymerOne.router');

	// rM

})();
(function () {
	var cosM = angular.module('polymerOne.constant');

})();
(function () {
	var ctrlM = angular.module('polymerOne.ctrl');

	// ctrlM

})();
(function () {
	var cdM = angular.module('polymerOne.cust.dir');

	// cdM

})();
(function () {
	var dM = angular.module('polymerOne.dir');

	// dM

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('polymerOne.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('polymerOne.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
	// notice ();
	// initWow ();
});

function notice () {
	alert('pls, disable this function.');
}

function initWow () {
	new WOW().init();
}