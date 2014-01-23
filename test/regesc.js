'use strict';

var regesc = require('../regesc');

module.exports = {

    regesc: function (test) {
        test.deepEqual(regesc('-$()*+./?[\\]^{|}'),
            '\\-\\$\\(\\)\\*\\+\\.\\/\\?\\[\\\\\\]\\^\\{\\|\\}');
        test.done();
    }
};
