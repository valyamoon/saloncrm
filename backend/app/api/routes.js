module.exports = function(express) {
  var router = express.Router();
  console.log("one--------------");
  // user
  require("./modules/user/user_routes")(router);
  require("./modules/salon/salon_routes")(router);
  require("./modules/admin/admin_routes")(router);
  return router;
};
