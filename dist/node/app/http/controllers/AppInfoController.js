"use strict";

exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Node IoC - HTTP - Controllers - Home Controller
//--------------------------------------------------------
class AppInfoController extends _Controller.default {
  /**
   * {@inheritdoc}
   */
  static get dependencies() {
    return ['config'];
  }
  /**
   * Show application basic information.
   *
   * @returns {response}
   */


  show() {
    return this.json({
      name: this.config.get('app.name', 'Node IoC'),
      locale: this.config.get('app.locale', this.config.get('app.fallback_locale', 'en'))
    });
  }

}

var _default = AppInfoController;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;