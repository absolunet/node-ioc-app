//--------------------------------------------------------
//-- Node IoC - HTTP - Controllers - Home Controller
//--------------------------------------------------------

import Controller from './Controller';


/**
 * Home controller that shows main application pages.
 */
class HomeController extends Controller {

	/**
	 * Show the index page.
	 *
	 * @returns {response} Home page.
	 */
	index() {
		return this.view('pages.home');
	}

	/**
	 * Show an example page.
	 *
	 * @returns {response} An example page.
	 */
	example() {
		return this.view('pages.example');
	}

}


export default HomeController;
