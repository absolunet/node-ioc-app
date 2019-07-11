//--------------------------------------------------------
//-- Node IoC App - Test - Unit - Some Test
//--------------------------------------------------------
'use strict';

const { classes: { TestCase } } = require('@absolunet/ioc');


class SomeTest extends TestCase {

	testSomething() {
		this.expect(true).toBe(true);
	}

}


module.exports = SomeTest;
