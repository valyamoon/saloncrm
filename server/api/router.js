'use strict';

module.exports = function(express) {
    const router = express;
    require('./controller/auth/auth_router')(router);
    require('./controller/product/product_router')(router);
    return router;
}