//--------------------------------------------------------
//-- Node IoC App - Providers - Application service provider
//--------------------------------------------------------
'use strict';


const ConsoleServiceProvider = require('./ConsoleServiceProvider');
const { classes:{ ServiceProvider } } = require('@absolunet/ioc');


class AppServiceProvider extends ServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	register() {
		this.app.register(ConsoleServiceProvider);
	}

}

module.exports = AppServiceProvider;
