"use strict";

var _ioc = require("@absolunet/ioc");

//--------------------------------------------------------
//-- Node IoC - Bootstrap - Mixins - Example
//--------------------------------------------------------
_ioc.mixins.factory('example', SuperClass => {
  /**
   * Example mixin.
   */
  return class ExampleMixin extends SuperClass {};
});