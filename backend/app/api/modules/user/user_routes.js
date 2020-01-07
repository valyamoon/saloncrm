module.exports = function(router) {
  var user = require("./controllers/user_ctrl");
  var utils = require("../../../lib/util");
  var middlewares = [utils.ensureAuthorized];
  console.log("two-------------");
  router.get("/countrycodes", user.getCountryCodes);
  //free auth
  router.post("/getotp", user.requestVerification);
  router.post("/verifyotp", user.verifyUser);
  router.post("/register", user.registerUser);
  router.post("/login", user.login);
  router.post("/forgotpassword", user.forgotPassword);
  router.post("/updateuser", user.updateUser); //need to add authorization
  router.post('/logout',user.logoutUser);
  router.post('/users',user.getAllUsers);
  router.post('/addreviewrating',user.addReviewAndRatings);
  router.post('/deleteuser',user.softDeleteUser);
  router.post('/userdetail',user.getDetailsOfUser);
  router.post('/charge',user.userPayment)
  return router;
};
