//--------------------------------------------------------
//-- Node IoC - Test - Feature - SomeTest
//--------------------------------------------------------
'use strict';

const TestCase = require('../TestCase.js');


class SomeTest extends TestCase {

	testSomething() {
		this.expect(true).toBe(true);
	}

}


module.exports = SomeTest;