//--------------------------------------------------------
//-- Node IoC App - Controller registration
//--------------------------------------------------------
'use strict';

const HomeController   = require('./../lib/http/controllers/HomeController');
const AppInfoController = require('./../lib/http/controllers/AppInfoController');


module.exports = (router) => {

	// Here, you can centralize your controller registration.
	// Simply use router.controller('ControllerName', ControllerClass)
	// to register a controller by name.
	//
	// Let's build a cool MVC application!

	router.controller('HomeController',    HomeController);
	router.controller('AppInfoController', AppInfoController);

};
