//--------------------------------------------------------
//-- Node IoC App - Bootstrapped application
//--------------------------------------------------------
'use strict';


const path = require('path');


// Loading application container
const { app } = require('@absolunet/ioc');


// Configuring context of the application
app
	.useBasePath(path.join(__dirname, '..', '..'))
	.setContext(module);


// Exporting the application, ready to use!
module.exports = app;
