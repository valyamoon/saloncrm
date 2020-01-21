module.exports = function(router) {
  var salon = require("./controllers/salon_ctrl");

  var utils = require("../../../lib/util");
  var middlewares = [utils.ensureAuthorized];
  console.log("two-------------");
  router.post("/addsalon", salon.saveSalonDetails);
  router.post("/searchsalon", salon.getSalons);
  router.post("/addsalonservices", salon.addSalonServices);
  router.post("/salon", salon.getSalonDetails);
  router.post("/reviewsratings", salon.getReviewsAndRatingsList);
  router.post("/add-promocode", salon.addPromocodes);
  router.post("/promocodes", salon.getPromoCodes);
  router.post("/salonservices", salon.getSalonServices);
  router.post("/addemployee", salon.addEmployeeToSalon);
  router.post("/assignservice", salon.addServicesToEmployee);
  router.post("/removeservice", salon.removeServiceToEmployee);
  router.post("/saloncategories", salon.getCategoriesAndServicesOfSalon);
  router.post("/removesalonservice", salon.getRemovesalonservice);
  router.post("/addsalonweeklyslot", salon.addSalonWeeklySlots);
  router.post("/view-salon", salon.viewSalonDetails);

  // router.get('/listUser', middlewares, user.getUserList);
  return router;
};
