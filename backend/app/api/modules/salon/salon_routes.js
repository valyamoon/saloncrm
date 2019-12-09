module.exports = function(router) {
  
  var salon = require("./controllers/salon_ctrl");

  var utils = require("../../../lib/util");
  var middlewares = [utils.ensureAuthorized];
  console.log("two-------------");


  router.post("/addsalon", salon.saveSalonDetails);
  router.post("/searchsalon", salon.getSalons);

  // router.get('/listUser', middlewares, user.getUserList);
  return router;
};
