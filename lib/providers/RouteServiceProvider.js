//--------------------------------------------------------
//-- Node IoC App - Providers - Router service provider
//--------------------------------------------------------
'use strict';

const __                               = require('@absolunet/private-registry');
const { classes: { ServiceProvider } } = require('@absolunet/ioc');
const webRoutes                        = require('./../../routes/web');
const apiRoutes                        = require('./../../routes/api');


class RouteServiceProvider extends ServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	boot() {
		__(this).set('router', this.app.make('router'));
		this.mapWebRoutes();
		this.mapApiRoutes();
	}

	/**
	 * Map web routes in the router.
	 */
	mapWebRoutes() {
		this.router.group({}, webRoutes);
	}

	/**
	 * Map web routes in the router.
	 */
	mapApiRoutes() {
		this.router.group({
			prefix: 'api',
			as: 'api.'
		}, apiRoutes);
	}

	/**
	 * @returns {Router}
	 */
	get router() {
		return __(this).get('router');
	}

}

module.exports = RouteServiceProvider;
