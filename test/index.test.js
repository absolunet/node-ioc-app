'use strict';

const app = require('./..');


const { Tester } = require('@absolunet/ioc').classes;
const {
	TEST_ENGINE: engine,
	TEST_REPOSITORY: repository
} = process.env; // eslint-disable-line no-process-env


const AppServiceProvider     = require('../app/providers/AppServiceProvider');
const ConsoleServiceProvider = require('../app/providers/ConsoleServiceProvider');
const RouteServiceProvider   = require('../app/providers/RouteServiceProvider');


const providers = [
	AppServiceProvider,
	ConsoleServiceProvider,
	RouteServiceProvider
];


app.make(Tester)
	.boot(providers)
	.setEngine(engine)
	.run(repository);
