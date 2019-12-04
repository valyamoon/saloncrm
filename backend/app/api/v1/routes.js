module.exports = function(express) {
  const router = express.Router();

  // user
  // require('./modules/roles_permissions/role_permission_route')(router);
  require("./modules/user/user_routes")(router);
  // require('./modules/common/common_routes')(router);
  // require('./modules/skills/skill_routes')(router);
  // require('./modules/casesType/case_type_routes')(router);
  // require('./modules/role/role_routes')(router);
  // require('./modules/amaQualification/amaQualification_routes')(router);
  // require('./modules/caseState/case_state_routes')(router);
  // require('./modules/notification/notification_routes')(router);
  // require('./modules/country/country_routes')(router);
  // require('./modules/state/state_routes')(router);
  // require('./modules/specialRequirement/special_requirement_routes')(router);
  // require('./modules/lawyer/lawyer_routes')(router);
  // require('./modules/location/location_routes')(router);
  // require('./modules/case/case_routes')(router);
  // require('./modules/reporttype/reporttype_routes')(router);
  // require('./modules/specialist/specialist_routes')(router);
  // require('./modules/documents/documents_routes')(router);
  // require('./modules/specialist_availability/specialist_availability_routes')(router);
  // require('./modules/medicalnegligence/medicalnegligence_routes')(router);
  // require('./modules/serviceBooked/service_booked_routes')(router);
  // require('./modules/invoice/invoice_routes')(router);
  // require('./modules/appointment/appointment_routes')(router);
  return router;
};
