"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var defaultOptions = {
  concurrency: _constants.CONCURRENCY,
  partSize: _constants.PART_SIZE,
  timeout: _constants.TIMEOUT,
  errorText: _constants.ERROR_TEXT,
  retryCountMax: _constants.RETRY_COUNT_MAX
};
var _default = defaultOptions;
exports["default"] = _default;