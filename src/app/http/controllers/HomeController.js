//--------------------------------------------------------
//-- Node IoC - HTTP - Controllers - Home Controller
//--------------------------------------------------------

import Controller from './Controller';


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


export default HomeController;
