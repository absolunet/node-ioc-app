//--------------------------------------------------------
//-- Node IoC - API routes
//--------------------------------------------------------
'use strict';

export default (router) => {

	// All of the routes here will be prefixed by the uri '/api'.
	// All route names will also be prefixed by 'api.'.
	//
	// Let's build a nice API!

	router.get('/app', 'AppInfoController@show').name('app-info.show');

};
