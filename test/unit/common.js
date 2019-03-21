//--------------------------------------------------------
//-- Tests - Unit - Common
//--------------------------------------------------------
'use strict';


const { app } = require('@absolunet/ioc');
const AppServiceProvider = require('./../../lib/providers/AppServiceProvider');
const Kernel = require('@absolunet/ioc/lib/foundation/console/Kernel');


beforeEach(() => {
	app.flush();
	app.setContext(module);
	app.make(Kernel);
	app.register(AppServiceProvider);
	app.environment = 'test';
	app.bootIfNotBooted();
});


module.exports = app;
