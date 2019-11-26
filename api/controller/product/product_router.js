'use strict';
const product = require('./product_ctrl');

module.exports = function(router) {    
    router.get('/api/howdy/store/list', product.storeList);    
    router.post('/api/howdy/store/add', product.addStore);
    router.post('/api/howdy/store/getStore', product.getStore);
    router.get('/api/howdy/store/list/:id', product.storeFetchOne);
    router.put('/api/howdy/store/update', product.updateStore);
    router.delete('api/howdy/store/remove',product.deleteStore);
    // router.post('/api/howdy/product/update', product.productList);
}