//--------------------------------------------------------
//-- Node IoC - Test - Bootstrapper
//--------------------------------------------------------
'use strict';


// Load the application
const app = require('..');


// Load the Node IoC tester class, which is not bind into the application.
const { Tester } = require('@absolunet/ioc').classes;


// Retrieve environment variables to pass to the tester instance
const { TEST_ENGINE, TEST_REPOSITORY } = process.env; // eslint-disable-line no-process-env


// Instanciate the tester, boot it, set the engine from
// environment configuration and run the given test suite.
app.make(Tester)
	.boot()
	.setEngine(TEST_ENGINE)
	.run(TEST_REPOSITORY);
