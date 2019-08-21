//--------------------------------------------------------
//-- Node IoC App - Test - Unit - Some Test
//--------------------------------------------------------
'use strict';

const { TestCase } = require('@absolunet/ioc').classes;


class SomeTest extends TestCase {

	testSomething() {
		this.expect(true).toBe(true);
	}

}


module.exports = SomeTest;
