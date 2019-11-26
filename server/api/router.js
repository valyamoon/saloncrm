'use strict';

module.exports = function(express) {
    const router = express;
    require('./controller/login/login_router')(router)
    return router;
}