'use strict';

const app = require('./..');

const { classes: { Tester } }                              = require('@absolunet/ioc');
const { TEST_ENGINE: engine, TEST_REPOSITORY: repository } = process.env; // eslint-disable-line no-process-env

const AppServiceProvider     = require('./../lib/providers/AppServiceProvider');
const ConsoleServiceProvider = require('./../lib/providers/ConsoleServiceProvider');
const RouteServiceProvider   = require('./../lib/providers/RouteServiceProvider');


const providers = [
	AppServiceProvider,
	ConsoleServiceProvider,
	RouteServiceProvider
];


app.make(Tester)
	.boot(providers)
	.setEngine(engine)
	.run(repository);
