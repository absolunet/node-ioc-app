//--------------------------------------------------------
//-- Node IoC App - Providers - Console service provider
//--------------------------------------------------------
'use strict';

const { classes }                = require('@absolunet/ioc');
const BaseConsoleServiceProvider = classes.ConsoleServiceProvider;


class ConsoleServiceProvider extends BaseConsoleServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	get directory() {
		return __dirname;
	}

}

module.exports = ConsoleServiceProvider;
