"use strict";
var mongoose = require("mongoose");

//All models schema
/* ADDED BY SAURABH Udapure */
__rootRequire("app/api/v1/modules/user/models/user_model");
// // __rootRequire("app/api/v1/modules/user/models/token_models");
// __rootRequire("app/api/v1/modules/roles_permissions/models/role_models");
// __rootRequire("app/api/v1/modules/roles_permissions/models/assin_permission_model");
// __rootRequire("app/api/v1/modules/common/models/clinic_model");
// __rootRequire("app/api/v1/modules/user/models/lawfirms_model");
// __rootRequire("app/api/v1/modules/user/models/insurance_company_model");
// __rootRequire("app/api/v1/modules/user/models/case_manager_model");
// // __rootRequire("app/api/v1/modules/user/models/specialist_model");
// __rootRequire("app/api/v1/modules/user/models/patient_model");
// // __rootRequire("app/api/v1/modules/email_template/models/email_template_model");
// __rootRequire("app/api/v1/modules/email_template/models/email_template_model");
// __rootRequire("app/api/v1/modules/notification/models/notification_model");
// __rootRequire("app/api/v1/modules/lawyer/models/lawyer_model");
// __rootRequire("app/api/v1/modules/location/models/location_model");
// __rootRequire("app/api/v1/modules/location/models/multi_location_model");
// __rootRequire("app/api/v1/modules/specialist/models/specialist_model");

// // __rootRequire("app/api/v1/modules/user/models/user_model");

// /* ADDED BY JITENDRA */
// __rootRequire("app/api/v1/modules/skills/models/skill_model");
// __rootRequire("app/api/v1/modules/casesType/models/caseType_model");
// __rootRequire("app/api/v1/modules/reporttype/models/reporttype_model");
// __rootRequire("app/api/v1/modules/role/models/role_model");
// __rootRequire("app/api/v1/modules/amaQualification/models/amaQualification_model");
// __rootRequire("app/api/v1/modules/caseState/models/caseState_model");
// __rootRequire("app/api/v1/modules/country/models/country_model");
// __rootRequire("app/api/v1/modules/state/models/state_model");
// __rootRequire("app/api/v1/modules/specialRequirement/models/specialRequirement_model");
// __rootRequire("app/api/v1/modules/case/models/case_model");
// __rootRequire("app/api/v1/modules/user/models/insurance_company_model");
// __rootRequire("app/api/v1/modules/user/models/calender_setting_model");
// __rootRequire("app/api/v1/modules/medicalnegligence/models/medicalnegligence_model");

// __rootRequire("app/api/v1/modules/documents/models/document_model");
// /* ADDED BY SANIKA */
// __rootRequire("app/api/v1/modules/timezones/models/timezones_model");
// __rootRequire("app/api/v1/modules/specialist_availability/models/specialist_availability_model");

const config = require("./config.js").get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;
mongoose.connect(config.db.url, {
  user: config.db.user,
  pass: config.db.password,
  useNewUrlParser: true
}); //SDN Local server
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));
db.once("open", function() {
  console.log("Database conencted successfully!");
});
// mongoose.set('debug', true);
