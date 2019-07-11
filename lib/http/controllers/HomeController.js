//--------------------------------------------------------
//-- Node IoC App - HTTP - Controllers - Home Controller
//--------------------------------------------------------
'use strict';

const { classes: { Controller } } = require('@absolunet/ioc');


class HomeController extends Controller {

	/**
	 * Show the index page.
	 *
	 * @returns {response}
	 */
	index() {
		return this.view('pages.home');
	}

	/**
	 * Show an example page.
	 *
	 * @returns {response}
	 */
	example() {
		return this.view('pages.example');
	}

}


module.exports = HomeController;
