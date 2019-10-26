"use strict";

exports.default = void 0;

var _ioc = require("@absolunet/ioc");

//--------------------------------------------------------
//-- Node IoC - Providers - Application service provider
//--------------------------------------------------------

/**
 * Application service provider.
 */
class AppServiceProvider extends _ioc.ServiceProvider {
  /**
   * Register any application services.
   */
  register() {} // You may register any service either as a binding or a singleton using
  // this.app.bind('service.name', concrete) or
  // this.app.singleton('service.name', concrete). However, you should not
  // use any service since some services may not be available yet.

  /**
   * Bootstrap any application services.
   */


  boot() {// You may use services here to bootstrap them. You can get a service
    // instance using this.app.make('service.name').
  }

}

var _default = AppServiceProvider;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;