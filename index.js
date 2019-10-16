//--------------------------------------------------------
//-- Node IoC
//--------------------------------------------------------
'use strict';

// Load application
const app = require('./dist/node');


// Configure context of the application
app
	.useBasePath(__dirname)
	.setContext(module);


// Export the application, ready to use!
module.exports = app;
