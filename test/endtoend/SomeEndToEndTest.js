//--------------------------------------------------------
//-- Node IoC - Test - End to end - SomeEndToEndTest
//--------------------------------------------------------
'use strict';

const TestCase = require('../TestCase');


class SomeEndToEndTest extends TestCase {

	testSomething() {
		this.expect(true).toBe(true);
	}

}


module.exports = SomeEndToEndTest;
