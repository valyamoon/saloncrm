"use strict";

module.exports = function(router) {
  const auth = require("./login_ctrl");
  router.post("/api/getotp", auth.requestVerification);
  router.post("/api/verifyotp", auth.verifyNumber);
  router.post("/api/registercustomer", auth.addUser);
  router.get("/api/codes", auth.getCountrycodes);
};
