module.exports = function(router) {
  
    var admin = require("./controllers/admin_ctrl");
  
    var utils = require("../../../lib/util");
    var middlewares = [utils.ensureAuthorized];
    console.log("two-------------");
    router.post("/add-categories", admin.addCategories);
    router.post("/salonsrequest", admin.getSalonsRequestList);
    router.post("/acceptrequest",admin.acceptSalonRequest);
    router.post("/suspendsalon",admin.suspendSalon);
    router.post("/categories",admin.getCategories);
    router.post('/addservices',admin.addServices);
    router.post('/removeservices',admin.removeServices);
    router.post('/add-role',admin.addRoles);
    router.post('/roles',admin.getRoles);
    router.post('/activesalons',admin.getActiveSalonsList);
    router.post('/userscount',admin.fetchActiveUsersCount);
    router.post('/salonscount',admin.fetchActiveSalonsCount);
    router.post('/userslist',admin.fetchActiveUsersList);
    router.post('/remove-categories',admin.removeCategories);
    router.post('/archive-categories',admin.getArchivedCategories);
    router.post('/admin-categories',admin.getAdminCategoriesList);
    router.post('/remove-role',admin.removeRole);
    router.post('/edit-role',admin.updateRole);
    router.post('/awake-category',admin.awakeCategory);

    
    return router;
  };