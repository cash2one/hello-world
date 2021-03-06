/**
 * @file 格式化日期
 * @author zhujialu
 */
define(function (require, exports, module) {

    'use strict';

    var moment = require('moment');

    return function (date, format) {
        return moment(date).format(format || 'HH:mm');
    };

});