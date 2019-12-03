"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_TEXT = exports.MIN_PART_SIZE = exports.PART_SIZE = exports.TIMEOUT = exports.RETRY_COUNT_MAX = exports.CONCURRENCY = void 0;

/** 默认最高并发数量 2 */
var CONCURRENCY = 2;
/** 超时重新上传次数 */

exports.CONCURRENCY = CONCURRENCY;
var RETRY_COUNT_MAX = 3;
/** 默认超时时间60s */

exports.RETRY_COUNT_MAX = RETRY_COUNT_MAX;
var TIMEOUT = 60 * 1000;
/** 默认分片大小为500kb */

exports.TIMEOUT = TIMEOUT;
var PART_SIZE = 500;
/** 最小分片大小为100kb */

exports.PART_SIZE = PART_SIZE;
var MIN_PART_SIZE = 100;
/** 错误信息提示 */

exports.MIN_PART_SIZE = MIN_PART_SIZE;
var ERROR_TEXT = '网络故障请重试';
exports.ERROR_TEXT = ERROR_TEXT;