module.exports = function(router) {
  
    var admin = require("./controllers/admin_ctrl");
  
    var utils = require("../../../lib/util");
    var middlewares = [utils.ensureAuthorized];
    console.log("two-------------");
  
  
    router.post("/addcategories", admin.addCategories);
    router.post("/salonsrequest", admin.getSalonsRequestList);
    router.post("/acceptrequest",admin.acceptSalonRequest);
    router.post("/suspendsalon",admin.suspendSalon);


  
    // router.get('/listUser', middlewares, user.getUserList);
    return router;
  };