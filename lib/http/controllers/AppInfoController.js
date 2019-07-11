//--------------------------------------------------------
//-- Node IoC App - HTTP - Controllers - Home Controller
//--------------------------------------------------------
'use strict';

const { classes: { Controller } } = require('@absolunet/ioc');


class AppInfoController extends Controller {

	/**
	 * {@inheritdoc}
	 */
	static get dependencies() {
		return ['config'];
	}

	/**
	 * Show application basic information.
	 *
	 * @returns {response}
	 */
	show() {
		return this.json({
			name: this.config.get('app.name', 'Node IoC App'),
			locale: this.config.get('app.locale', this.config.get('app.fallback_locale', 'en'))
		});
	}

}


module.exports = AppInfoController;
