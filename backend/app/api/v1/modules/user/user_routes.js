module.exports = function(router) {
  var user = require("./controllers/user_ctrl");

  //  var lawfirm = require('./controllers/lawfirms_ctrl');

  //var patient = require('./controllers/patients_ctrl');

  router.post("/user/getotp", user.requestVerification);
  router.get("/user/countrycodes", user.getCountryCodes);
  router.post("/user/verifyotp", user.verifyUser);
  router.post("/user/register", user.registerUser);
  router.post("user/login", user.login);
  //   router.post("/user/login", user.login);
  //   router.post("/user/forgotPassword", user.forgotPassword);
  //   router.post("/user/checkUrl", user.checkUrl);
  //   router.post("/user/userLogout", user.userLogout);
  //   router.post("/user/userRegister", user.userRegister);
  //   router.post("/user/resetPassword", user.resetPassword);
  //   router.post("/user/acceptOrRejectRequest", user.acceptOrRejectRequest);
  //   router.post("/user/changePassword", user.changePassword);
  //   router.post("/user/editProfile", user.editProfile);
  //   router.post("/user/getProfile", user.getUserDetail);
  //   router.get("/user/getIncurenceCompanies", user.getIncurenceCompanies);
  //   router.post("/user/getCaseManager", user.getCaseManager);
  //   router.post("/user/activeDeactiveUser", user.activeDeactiveUser);
  //   router.get("/user/getCalenderSetting", user.getCalenderSetting);
  //   router.post("/lawfirm/listLawfirms", lawfirm.listLawfirms);
  //   router.post("/lawfirm/getLawfirmDetails", lawfirm.getLawfirmDetails);
  //   router.post("/lawfirm/editLawfirm", lawfirm.editLawfirm);
  //   router.post("/lawfirm/deleteLawfirm", lawfirm.deleteLawfirm);
  //   router.post("/lawfirm/addLawfirm", lawfirm.addLawfirm);
  //   router.post("/patient/listPatients", patient.listPatients);
  //   router.post("/patient/getPatientDetails", patient.getPatientDetails);
  //   router.post("/patient/editPatientDetails", patient.editPatientDetails);
  //   router.post("/patient/activeDeactivePatient", patient.activeDeactivePatient);
  //   router.post("/patient/addPatientDetails", patient.addPatientDetails);
  //   router.post(
  //     "/patient/checkPatientActivationUrl",
  //     patient.checkPatientActivationUrl
  //   );
  //   router.post("/patient/resetPatientPassword", patient.resetPatientPassword);

  return router;
};
