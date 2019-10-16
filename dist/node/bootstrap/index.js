"use strict";

exports.default = void 0;

var _Kernel = _interopRequireDefault(require("../app/console/Kernel"));

var _Handler = _interopRequireDefault(require("../app/exceptions/Handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Node IoC - Bootstrap
//--------------------------------------------------------
var _default = app => {
  let kernel; // Register main handlers in the container

  app.singleton('kernel', _Kernel.default);
  app.singleton('exception.handler', _Handler.default); // Add a delay before bootstrapping to allow external registering.

  new Promise(setTimeout).then(async () => {
    // Make the kernel instance
    kernel = app.make(`kernel`); // Boot the application.

    app.bootIfNotBooted(); // Handle the incoming request.

    await kernel.handle();
  }).catch(async error => {
    // If an error occurred, handle it through the defined exception handler.
    await app.make('exception.handler').handle(error);
  }).finally(async () => {
    // When the request, or an error, has been handled, terminate the request.
    await kernel.terminate();
  });
  return app;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;