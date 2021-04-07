module.exports = function(router) {
  var user = require("./controllers/user_ctrl");
  var utils = require("../../../lib/util");
  var middlewares = [utils.ensureAuthorized];
  console.log("two-------------");
  router.get("/countrycodes", user.getCountryCodes);
  router.get("/fb-data-deletion-confirmation", user.fbDataDeletionConfirmation);
  //free auth
  router.post("/getotp", user.requestVerification);
  router.post("/fb-data-deletion-callback", user.fbDataDeletionCallback);
  router.post("/verifyotp", user.verifyUser);
  router.post("/register", user.registerUser);
  router.post("/login", user.login);
  router.post("/forgotpassword", user.forgotPassword);
  router.post("/updateuser", user.updateUser); //need to add authorization
  router.post("/logout", user.logoutUser);
  router.post("/users", user.getAllUsers);
  router.post("/addreviewrating", user.addReviewAndRatings);
  router.post("/deleteuser", user.softDeleteUser);
  router.post("/user-detail", user.getDetailsOfUser);
  router.post("/charge", user.userPayment);
  router.post("/cancel-booking", user.cancelBooking);
  router.post("/users-booking", user.getBookingList);
  router.post("/users-wallet", user.getWalletAmount);
  router.post("/get-stripe-token", user.getStripeToken);
  router.post("/initate-wallet", user.InitiateWalletAmount);
  return router;
};
