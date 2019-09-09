//--------------------------------------------------------
//-- Node IoC - Test - Feature - MyService - MyMethodTest
//--------------------------------------------------------
'use strict';

const { TestCase } = require('@absolunet/ioc').classes;


class MyMethodTest extends TestCase {

	testSomething() {
		this.expect(true).toBe(true);
	}

}


module.exports = MyMethodTest;
