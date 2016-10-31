/**
 * Created by phpstorm
 * @file path handle
 * @author lijun
 * @date 16/10/20
 */
var path = require('path');
/**
 * 资源文件路径过滤
 * @params source {string}
 *
 * @return handle {object}
 * @property pathname {string} 去掉前缀和后缀的路径
 * @property prefix {string} source路径的前缀
 * @property params {string} source路径的后缀
 * @property extname {string} source的扩展名
 * @property isPlugin: false,
 * @property isFilter: false
 *
 */
module.exports = function (source, options) {
    var pluginReg = /^(text\!|tpl\!)/;
    var pathReg = /(\.{1,2}|\w+|\d+|\/+)[\w\d\/\.]+$/ig;
    var filterReg = /^(http:\/\/|https:\/\/|data:)/ig;
    var result = {
        pathname: '',
        prefix: '',
        params: '',
        extname: '',
        isPlugin: false,
        isFilter: false,
        isAmd: false,
        source: source
    };

    var extend = { };

    if (!source || filterReg.test(source)) {
        extend = {
            pathname: source,
            isFilter: true
        };
    }
    else if (pluginReg.test(source)) {
        extend = {
            isPlugin: true,
            pathname: source.replace(pluginReg, '')
        }
    }
    else {
        var splits = source.split('?');
        var source = splits[0];
        var params = splits[1] || '';

        if (params) {
            params = '?' + params;
        }

        extend = {
            prefix: source.replace(pathReg, ''),
            pathname: source.match(pathReg)[0],
            params: params,
            extname: path.extname(source)
        }
    }

    if (result.extname === ''
        || result.extname === '.js'
    ) {
        extend['extname'] = '.js';
        extend['isAmd'] = true;
    }

    return Object.assign(
        result,
        extend,
        options || {}
    );
};