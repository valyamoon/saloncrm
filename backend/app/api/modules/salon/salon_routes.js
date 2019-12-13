module.exports = function(router) {
  
  var salon = require("./controllers/salon_ctrl");

  var utils = require("../../../lib/util");
  var middlewares = [utils.ensureAuthorized];
  console.log("two-------------");


  router.post("/addsalon", salon.saveSalonDetails);
  router.post("/searchsalon", salon.getSalons);
  router.post('/addservice',salon.addServices);
  router.post('/salon',salon.getSalonDetails);
  router.post('/reviewsratings',salon.getReviewsAndRatingsList)


  // router.get('/listUser', middlewares, user.getUserList);
  return router;
};
