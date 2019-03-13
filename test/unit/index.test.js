//--------------------------------------------------------
//-- Tests - Unit
//--------------------------------------------------------
'use strict';


const app = require('./common');
const AppServiceProvider = require('./../../lib/providers/AppServiceProvider');


test('Application correctly boot', () => {
	expect(app.booted).toBe(true);
});

test('Application has main application service provider', () => {
	expect(app.isRegistered(AppServiceProvider));
});
