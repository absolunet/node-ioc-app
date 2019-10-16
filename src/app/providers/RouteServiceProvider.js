//--------------------------------------------------------
//-- Node IoC - Providers - Router service provider
//--------------------------------------------------------

import __                  from '@absolunet/private-registry';
import { ServiceProvider } from '@absolunet/ioc';


class RouteServiceProvider extends ServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	boot() {
		__(this).set('router', this.app.make('router'));
		this.mapApiRoutes();
		this.mapWebRoutes();
	}

	/**
	 * Map web routes in the router.
	 */
	mapWebRoutes() {
		this.router.group({}, this.app.getModule(this.app.routesPath('web.js')));
	}

	/**
	 * Map web routes in the router.
	 */
	mapApiRoutes() {
		this.router.group({
			prefix: 'api',
			as: 'api.'
		}, this.app.getModule(this.app.routesPath('api.js')));
	}

	/**
	 * @returns {Router}
	 */
	get router() {
		return __(this).get('router');
	}

}


export default RouteServiceProvider;
