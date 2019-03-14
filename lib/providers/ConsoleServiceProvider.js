//--------------------------------------------------------
//-- Node IoC App - Providers - Console service provider
//--------------------------------------------------------
'use strict';


const { classes:{ ConsoleServiceProvider } } = require('@absolunet/ioc');


class ConsoleServiceprovider extends ConsoleServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	get dir() {
		return __dirname;
	}

}

module.exports = ConsoleServiceprovider;
