//--------------------------------------------------------
//-- Node IoC - Bootstrap - Mixins - Example
//--------------------------------------------------------

import { mixins } from '@absolunet/ioc';


mixins.factory('example', (SuperClass) => {

	/**
	 * Example mixin.
	 */
	return class ExampleMixin extends SuperClass {

	};

});
