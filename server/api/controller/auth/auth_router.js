'use strict';

module.exports = function(router) {
    const auth = require('./auth_ctrl');
    router.get('/api/howdy/login', auth.userLogin);
    router.get('/api/howdy/test', auth.testSwaggerRequest);
}