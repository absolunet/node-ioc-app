//--------------------------------------------------------
//-- Node IoC App - Test - Feature - MyService - MyMethodTest
//--------------------------------------------------------
'use strict';

const { classes: { TestCase } } = require('@absolunet/ioc');


class MyMethodTest extends TestCase {

	testSomething() {
		this.expect(true).toBe(true);
	}

}


module.exports = MyMethodTest;
