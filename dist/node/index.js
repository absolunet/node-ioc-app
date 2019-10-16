"use strict";

exports.default = void 0;

var _ioc = require("@absolunet/ioc");

var _bootstrap = _interopRequireDefault(require("./bootstrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Node IoC
//--------------------------------------------------------
// Importing Node IoC application class.
// Importing application bootstrapper.
// Create a fresh application instance.
const app = _ioc.Application.make(); // Bootstrap the application.


(0, _bootstrap.default)(app); // Exposing the application.

var _default = app;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;