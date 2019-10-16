//--------------------------------------------------------
//-- Node IoC - Test - Bootstrapper
//--------------------------------------------------------
'use strict';


// Load the application
const app = require('../..');


// Load the Node IoC tester class, which is not bind into the application.
const { Tester } = require('@absolunet/ioc');


// Retrieve environment variables to pass to the tester instance
const { TEST_ENGINE, TEST_REPOSITORY } = process.env; // eslint-disable-line no-process-env


// Instantiate the tester.
const tester = app.make(Tester);


// Boot the tester, set the engine from environment configuration and run the given test suite.
tester.boot();
tester.setEngine(TEST_ENGINE);
tester.run(TEST_REPOSITORY);
