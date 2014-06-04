'use strict';

var R_SPECIALS = /[-$()*+.\/?[\\\]^{|}]/g;
var S_REPLACER = '\\$&';

var replace = String.prototype.replace;

/**
 * @param {String} s
 *
 * @returns {String}
 * */
module.exports = function (s) {

    return replace.call(s, R_SPECIALS, S_REPLACER);
};
