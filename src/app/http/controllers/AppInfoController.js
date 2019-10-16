//--------------------------------------------------------
//-- Node IoC - HTTP - Controllers - Home Controller
//--------------------------------------------------------

import Controller from './Controller';


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
			name: this.config.get('app.name', 'Node IoC'),
			locale: this.config.get('app.locale', this.config.get('app.fallback_locale', 'en'))
		});
	}

}


export default AppInfoController;
