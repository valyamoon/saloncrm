module.exports = function(router) {

    var admin = require("./controllers/admin_ctrl");

    var utils = require("../../../lib/util");
    var middlewares = [utils.ensureAuthorized];
    console.log("two-------------");
    router.post("/addcategories", admin.addCategories);
    router.post("/salonsrequest", admin.getSalonsRequestList);
    router.post("/acceptrequest", admin.acceptSalonRequest);
    router.post("/suspendsalon", admin.suspendSalon);
    router.post("/categories", admin.getCategories);
    router.post('/addservices', admin.addServices);
    router.post('/removeservices', admin.removeServices);
    router.post('/addrole', admin.addRoles);
    router.post('/roles', admin.getRoles);
    router.post('/activesalons', admin.getActiveSalonsList);
    router.post('/servicelist', admin.getServiceList);
    return router;
};