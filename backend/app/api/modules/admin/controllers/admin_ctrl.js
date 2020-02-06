"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
const messageTemplates = require("../../../../lib/messagetemplates");
const stripe = require("stripe")("sk_test_NKkb8atD9EpUwsWTE38S64Yr00DT0y0RDh");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const mailer = require("../../../../lib/mailer");

const subscriptionplans = require("../model/subscriptionPlan");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const emailtemplate = require("../model/email_template/emailtemplateSchema");
const roles = require("../../user/model/rolesSchema");
const salonSubscriptions = require("../../salon/model/salonSubscriptions");
const salons = require("../../salon/model/salonSchema");
const categories = require("../../admin/model/categoriesSchema");
const reviewratings = require("../../salon/model/salonreviewsratingSchema");
const salonservice = require("../../salon/model/salonservicesSchema");
const services = require("../model/servicesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");
const util = require("../../../../lib/util");

module.exports = {
  addCategories: addCategories,
  getSalonsRequestList: getSalonsRequestList,
  acceptSalonRequest: acceptSalonRequest,
  suspendSalon: suspendSalon,
  getCategories: getCategories,
  addServices: addServices,
  removeServices: removeServices,
  addRoles: addRoles,
  getRoles: getRoles,
  getActiveSalonsList: getActiveSalonsList,
  getServiceList: getServiceList,
  fetchActiveUsersCount: fetchActiveUsersCount,
  fetchActiveSalonsCount: fetchActiveSalonsCount,
  fetchActiveUsersList: fetchActiveUsersList,
  getArchivedCategories: getArchivedCategories,
  removeCategories: removeCategories,
  getAdminCategoriesList: getAdminCategoriesList,
  removeRole: removeRole,
  updateRole: updateRole,
  awakeCategory: awakeCategory,
  getActiveServices: getActiveServices,
  getActiveAdminList: getActiveAdminList,
  // checkAuthorisation: checkAuthorisation,
  fetchActiveUsersAll: fetchActiveUsersAll,
  forgotPassword: forgotPassword,
  getServices: getServices,
  activeUsers: activeUsers,
  deactiveUsers: deactiveUsers,
  createSubscription: createSubscription,
  getSubscription: getSubscription,
  deletePlan: deletePlan,
  getSubscirbedSalonsList: getSubscirbedSalonsList,
  addEmailTemplate: addEmailTemplate,
  resetPassword: resetPassword,
  updateCategories: updateCategories,
  updateService: updateService
};

/**
 * Function is use to Add categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addCategories(req, res) {
  async function addCategories() {
    try {
      if (req.body.catname) {
        let newCategory = new categories({
          catname: req.body.catname
        });

        let addCategory = await commonQuery.InsertIntoCollection(
          categories,
          newCategory
        );

        if (!addCategory) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, error)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.CATEGORIES_ADDED,
              addCategory
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  addCategories().then(function() {});
}
/**
 * Function is use to get salon list which need to be approved by Admin
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getSalonsRequestList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getSalonsRequestList() {
    try {
      if (req.body) {
        let condition = {
          isActive: false,
          isDeleted: false,
          isDeclined: false
        };

        let count = await commonQuery.findCount(salons, condition);

        let listOfSalons = await commonQuery.fetch_all_paginated(
          salons,
          condition,
          pageSize,
          currentPage
        );

        if (!listOfSalons) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, error)
          );
        } else {
          listOfSalons.forEach(function(c) {
            c.isservicesadded = undefined;
            c.isreviewadded = undefined;
          });
          let dataToPass = {
            data: listOfSalons,
            countNumber: count
          };

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              dataToPass
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getSalonsRequestList().then(function() {});
}

/**
 * Function is use to Accept salon request
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function acceptSalonRequest(req, res) {
  async function acceptSalonRequest() {
    try {
      if (req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let activeCondition = {
          isActive: true,
          isApproved: true
        };

        let acceptSalonRequest = await commonQuery.updateOneDocument(
          salons,
          condition,
          activeCondition
        );

        if (!acceptSalonRequest || acceptSalonRequest === null) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = acceptSalonRequest.user_id;

          let activeCondition = {
            isActive: true,
            isApproved: true
          };
          let condition = {
            _id: mongoose.Types.ObjectId(user_id)
          };
          let activeSalonLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );
          if (!activeSalonLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
            let messagetTemplate = {
              subject: messageTemplates.acceptSalonRequest["subject"],
              message: messageTemplates.acceptSalonRequest["message"]
            };

            let sendEmailConfirmation = await mailer.sendMailTO(
              activeSalonLogin.email,
              messagetTemplate
            );

            if (!sendEmailConfirmation) {
            } else {
            }
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SALON_REQUEST_ACCEPTED,
                acceptSalonRequest
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  acceptSalonRequest().then(function() {});
}
/**
 * Function is use to suspend Salon on subsription expiry
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function suspendSalon(req, res) {
  async function suspendSalon() {
    try {
      if (req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let activeCondition = {
          isActive: false,
          isDeclined: true,
          isApproved: false
        };

        let suspendedSalon = await commonQuery.updateOneDocument(
          salons,
          condition,
          activeCondition
        );

        if (!suspendedSalon) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = suspendedSalon.user_id;

          let activeCondition = {
            isActive: false,
            isSubmitted: false
          };
          let condition = {
            _id: mongoose.Types.ObjectId(user_id)
          };
          let deactivateLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );

          if (!deactivateLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
            let messagetTemplate = {
              subject: messageTemplates.accountSuspended["subject"],
              message: messageTemplates.accountSuspended["message"]
            };

            let sendEmailConfirmation = await mailer.sendMail(
              deactivateLogin.email,
              messagetTemplate
            );

            if (!sendEmailConfirmation) {
            } else {
            }

            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SALON_SUSPENDED,
                suspendedSalon
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  suspendSalon().then(function() {});
}

/**
 * Function is use to Fetch list of categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getCategories(req, res) {
  async function getCategories() {
    try {
      if (req.body.type === "categories") {
        let categoriesList = await commonQuery.fetch_categories(
          categories,
          "services",
          "services",
          "_id"
        );
        if (!categoriesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null)
          );
        } else {
          categoriesList.forEach(function(v) {
            v.services.forEach(function(v) {
              delete v.isActive;
              delete v.isDeleted;
            });
          });

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              categoriesList
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getCategories().then(function() {});
}

/**
 * Function is use to Add services in categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function addServices(req, res) {
  async function addServices() {
    try {
      if (req.body && req.body.category_id) {
        let newService = new services({
          name: req.body.name,
          category_id: req.body.category_id,
          logo: req.body.logo,
          description: req.body.description
        });

        let saveService = await commonQuery.InsertIntoCollection(
          services,
          newService
        );
        if (!saveService) {
        } else {
          let categoryUpdate = await commonQuery.addServicesInCategories(
            categories,
            req.body.category_id,
            saveService._id
          );

          if (!categoryUpdate) {
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
          } else {
          }

          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, saveService)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  addServices().then(function() {});
}

/**
 * Function is use to Remove services in categories and soft delete
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeServices(req, res) {
  async function removeServices() {
    try {
      if (req.body && req.body.service_id) {
        let condition = {
          _id: req.body.service_id
        };

        let removeCondition = {
          isActive: false,
          isDeleted: true
        };

        let removeService = await commonQuery.updateOneDocument(
          services,
          condition,
          removeCondition
        );

        if (!removeService) {
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
        } else {
          let categoryUpdate = await commonQuery.removeServicesInCategories(
            categories,
            removeService.category_id,
            req.body.service_id
          );

          if (!categoryUpdate) {
          } else {
          }

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              removeService
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  removeServices().then(function() {});
}

/**
 * Function is use to add roles(Currently we have only three roles Admin, Salon, User)
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function addRoles(req, res) {
  async function addRoles() {
    try {
      if (req.body && req.body.role) {
        let newRole = new roles({
          name: req.body.role
        });
        let saveRole = await commonQuery.InsertIntoCollection(roles, newRole);
        if (!saveRole) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, saveRole)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  addRoles().then(function() {});
}
/**
 * Function is use to get list of Roles
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getRoles(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getRoles() {
    try {
      let countNumber;
      if (req.body && req.body.type === "roles") {
        let condition = {
          status: true,
          isDeleted: false
        };

        let rolesCount = await commonQuery.findCount(roles, condition);

        if (rolesCount) {
          countNumber = rolesCount;
        } else {
          countNumber = rolesCount;
        }

        let rolesList = await commonQuery.fetch_all_paginated(
          roles,
          condition,
          pageSize,
          currentPage
        );

        if (!rolesList) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          rolesList.forEach(function(v) {
            v.isDeleted = undefined;
            v.status = undefined;
          });
          let dataToPass = {
            data: rolesList,
            count: countNumber
          };

          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, dataToPass)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getRoles().then(function() {});
}

/**
 * Function is use to get list of Approved or active salons
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getActiveSalonsList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getActiveSalonsList() {
    try {
      if (req.body && req.body.type === "activesalons") {
        let condition = {
          isActive: true,
          isDeleted: false,
          isApproved: true,
          isDeclined: false
        };
        let activeSalonsList = await commonQuery.fetch_all_paginated(
          salons,
          condition,
          pageSize,
          currentPage
        );
        if (!activeSalonsList) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          activeSalonsList.forEach(function(v) {
            v.isDeleted = undefined;
            v.isreviewadded = undefined;
            v.isservicesadded = undefined;
            v.employees = undefined;
            v.location = undefined;
          });

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              activeSalonsList
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getActiveSalonsList().then(function() {});
}

/**
 * Function is use to Fetch Active Users Count
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function fetchActiveUsersCount(req, res) {
  async function fetchActiveUsersCount() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type === "user") {
          let roleCondition = {
            name: "user"
          };
          let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

          let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

          let condition = {
            isActive: true,
            isDeleted: false,
            role_id: roleId
          };
          let usersCount = await commonQuery.findCount(users, condition);
          if (!usersCount) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                usersCount
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  fetchActiveUsersCount().then(function() {});
}
/**
 * Function is use to Fetch Active Salon List
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function fetchActiveSalonsCount(req, res) {
  async function fetchActiveSalonsCount() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type === "salon") {
          let condition = {
            isActive: true,
            isDeleted: false,
            isApproved: true,
            isDeclined: false
          };
          let salonsCount = await commonQuery.findCount(salons, condition);

          if (!salonsCount) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                salonsCount
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  fetchActiveSalonsCount().then(function() {});
}

function fetchActiveUsersList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function fetchActiveUsersList() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type === "user") {
          let roleCondition = {
            name: "user"
          };
          let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

          let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

          let condition = {
            isActive: true,
            isDeleted: false,
            role_id: roleId
          };
          let usersList = await commonQuery.fetch_all_paginated(
            users,
            condition,
            pageSize,
            currentPage
          );
          if (!usersList) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                usersList
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  fetchActiveUsersList().then(function() {});
}
/**
 * Function is use to remove categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeCategories(req, res) {
  async function removeCategories() {
    try {
      if (req.body && req.body.category_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.category_id)
        };
        let updateCondition = {
          isActive: false,
          isDeleted: true
        };
        let deleteCategory = await commonQuery.updateOneDocument(
          categories,
          condition,
          updateCondition
        );
        if (!deleteCategory) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              deleteCategory
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  removeCategories().then(function() {});
}
/**
 * Function is use to get list of archived categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getArchivedCategories(req, res) {
  async function getArchivedCategories() {
    try {
      if (req.body && req.body.type === "archive-categories") {
        let condition = {
          isActive: false,
          isDeleted: true
        };
        let archivedCategories = await commonQuery.fetch_all(
          categories,
          condition
        );
        if (!archivedCategories) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              archivedCategories
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getArchivedCategories().then(function() {});
}

/**
 * Function is use to get list of Admin categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getAdminCategoriesList(req, res) {
  let adminCount;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getAdminCategoriesList() {
    try {
      if (req.body && req.body.type === "admin-categories") {
        let condition = {
          isActive: true,
          isDeleted: false
        };

        let adminCategoriesCount = await commonQuery.findCount(
          categories,
          condition
        );
        if (!adminCategoriesCount) {
          adminCount = 0;
        } else {
          adminCount = adminCategoriesCount;
        }

        let adminCategories = await commonQuery.fetch_all_paginated(
          categories,
          condition,
          pageSize,
          currentPage
        );
        if (!adminCategories) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          adminCategories.forEach(function(c) {
            c.services = undefined;
          });
          let dataToPass = {
            count: adminCount,
            data: adminCategories
          };

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              dataToPass
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getAdminCategoriesList().then(function() {});
}

/**
 * Function is use to remove role
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeRole(req, res) {
  async function removeRole() {
    try {
      if (req.body && req.body.role_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.role_id)
        };
        let updateCondition = {
          status: false,
          isDeleted: true
        };
        let removeRole = await commonQuery.updateOneDocument(
          roles,
          condition,
          updateCondition
        );
        if (!removeRole) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              removeRole
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  removeRole().then(function() {});
}

/**
 * Function is use to update role
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function updateRole(req, res) {
  async function updateRole() {
    try {
      if (req.body && req.body._id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body._id)
        };
        let updateCondition = {
          name: req.body.name
        };
        let updatedRole = await commonQuery.updateOneDocument(
          roles,
          condition,
          updateCondition
        );
        if (!updatedRole) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.USER_UPDATED, updatedRole)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  updateRole().then(function() {});
}

/**
 * Function is use to awake category
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function awakeCategory(req, res) {
  async function awakeCategory() {
    try {
      if (req.body && req.body._id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body._id)
        };
        let updateCondition = {
          isActive: true,
          isDeleted: false
        };
        let awakeCategories = await commonQuery.updateOneDocument(
          categories,
          condition,
          updateCondition
        );
        if (!awakeCategories) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_UPDATED,
              awakeCategories
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  awakeCategory().then(function() {});
}

/**
 * Function is use to fetch Services
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getActiveServices(req, res) {
  let servicesCount;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;

  async function getActiveServices() {
    try {
      if (req.body.type == "services") {
        let condition = {
          isActive: true,
          isDeleted: false
        };
        servicesCount = await commonQuery.findCount(services, condition);
        if (servicesCount) {
          servicesCount = servicesCount;
        } else {
          servicesCount = 0;
        }
        let servicesList = await commonQuery.fetch_all_paginated(
          services,
          condition,
          pageSize,
          currentPage
        );

        if (!servicesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let dataToPass = {
            data: servicesList,
            count: servicesCount
          };
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              dataToPass
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getActiveServices().then(function() {});
}

/**
 * Function is use to fetch All Admins
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getActiveAdminList(req, res) {
  let AdminCount;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;

  async function getActiveAdminList() {
    try {
      if (req.body.type == "admin") {
        let condition = {
          isActive: true,
          isDeleted: false
        };
        AdminCount = await commonQuery.findCount(services, condition);
        if (AdminCount) {
          AdminCount = AdminCount;
        } else {
          AdminCount = 0;
        }
        let servicesList = await commonQuery.fetch_all_paginated(
          services,
          condition,
          pageSize,
          currentPage
        );

        if (!servicesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let dataToPass = {
            data: servicesList,
            count: servicesCount
          };
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              dataToPass
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getActiveAdminList().then(function() {});
}

/**
 * Function is use to fetch All Active Users List
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function fetchActiveUsersAll(req, res) {
  let model;
  let count;
  let countCondition;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function fetchActiveUsersAll() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type) {
          let roleCondition = {
            name: req.body.type
          };

          if (req.body.type == "user") {
            countCondition = {
              isActive: true,
              isDeleted: false
            };
            model = users;
          } else if (req.body.type == "salon") {
            countCondition = {
              isActive: true,
              isDeleted: false,
              isApproved: true
            };
            model = salons;
          } else if (req.body.type == "admin") {
            countCondition = {
              isActive: true,
              isDeleted: false
            };
            model = users;
          }

          let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

          let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

          let condition = {
            isActive: true,
            isDeleted: false,
            role_id: roleId
          };

          let fetchCount = await commonQuery.findCount(model, condition);
          if (fetchCount) {
            count = fetchCount;
          }
          let usersList = await commonQuery.fetch_all_paginated(
            model,
            condition,
            pageSize,
            currentPage
          );
          if (!usersList) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            usersList.forEach(function(c) {
              c.password = undefined;
              c.lat = undefined;
              c.long = undefined;
            });

            let dataToPass = {
              data: usersList,
              count: count
            };
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                dataToPass
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  fetchActiveUsersAll().then(function() {});
}

/**
 * Function is use to restore password if forgotten
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function forgotPassword(req, res) {
  console.log("EMAIL", req.body);
  async function forgot_password() {
    try {
      if (!req.body.email) {
        res.json(Error(constant.ERROR_CODE, "Required Fields are missing"));
      } else if (req.body.email && !validator.isEmail(req.body.email)) {
        res.json(Error(constant.ERROR_CODE, "Invalid Email"));
      } else {
        console.log("req==========", req.body);
        var model = users;
        var condition = {
          email: req.body.email,
          isDeleted: false,
          isActive: true
        };
        var userObj = await commonQuery.findoneData(model, condition);
        console.log("userObj", userObj);

        if (userObj) {
          var condition = {
            _id: userObj._id
          };
          var updateData = {
            resetkey: ""
          };
          updateData.resetkey = utility.uuid.v1();

          let updateKey = await commonQuery.updateOneDocument(
            model,
            condition,
            updateData
          );
          console.log("updateKeyupdateKey", updateKey);
          if (updateKey._id) {
            var baseUrl = Config.baseUrl;
            var userMailData = {
              userId: userObj._id,
              email: userObj.email ? userObj.email : "",
              link: baseUrl + "#/create-password/" + updateKey.resetkey
            };
            console.log("BSSSSS", userMailData);
            let obj = {
              data: userMailData,
              mailType: "Forget Password" //constant.varibleType.FORGET_PASSWORD //"Forget Password"
            };

            let sendMail = await commonQuery.sendEmailFunction(obj);
            if (sendMail) {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  "mail send successfully" //constant.messages.forgotPasswordSuccess
                )
              );
            } else {
              res.json(Response(constant.ERROR_CODE, " can't send mail"));
            }
          }
        } else {
          res.json(Response(constant.INTERNAL_ERROR, "Email doesn't exist"));
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  forgot_password().then(data => {});
}
/**
 * Function is use to get list service provided by admin
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created On 09/01/2020
 */
async function getServiceList(req, res) {
  console.log("req.body", req.body);
  if (req.body.user_id) {
    var salonId = await util.getSalonId(req.body.user_id);
    let finalServiceArr = [];

    let salonCond = {
      isActive: true,
      isDeleted: false
    };
    let pageSize = 100;
    let page = 1;
    let serviceList = await commonQuery.fetch_all(services, salonCond);
    //  console.log("serviceList", serviceList); return;
    async.each(
      serviceList,
      async function(serviceData, firstCB) {
        let serviceCond = {
          salon_id: salonId,
          service_id: serviceData._id,
          category_id: serviceData.category_id
        };
        let salonService = await commonQuery.findAll(salonservice, serviceCond);
        let salonServiceData = {
          service: serviceData,
          salonserviceinfo: salonService
        };
        finalServiceArr.push(salonServiceData);
      },
      async function(err, data) {
        if (err) {
          console.log("Error @427", err);
        } else {
          res.json(Response(constant.SUCCESS_CODE, finalServiceArr));
        }
      }
    );
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}
async function getServices(req, res) {
  console.log("res.body", res.body);
  if (req.body.category_id) {
    let cond = {
      category_id: req.body.category_id
    };

    let servicesList = await commonQuery.fetch_all(services, cond);
    // console.log("servicesList", servicesList); return;
    if (!servicesList) {
      res.json(Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null));
    } else {
      res.json(
        Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, servicesList)
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}
function activeUsers(req, res) {
  async function activeUsers() {
    try {
      if (req.body && req.body.type) {
        let model;
        if (req.body.type === "admin" || req.body.type === "user") {
          model = users;
        } else if (req.body.type === "salon") {
          model = salons;
        }

        let condition = { _id: mongoose.Types.ObjectId(req.body._id) };
        let updateCondition = { isActive: true };
        let changeStatus = await commonQuery.updateOneDocument(
          model,
          condition,
          updateCondition
        );
        if (!changeStatus) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_UPDATED,
              finalServiceArr
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  activeUsers().then(function() {});
}
function deactiveUsers() {
  async function deactiveUsers() {
    try {
      if (req.body && req.body.type) {
        let model;
        if (req.body.type === "admin" || req.body.type === "user") {
          model = users;
        } else if (req.body.type === "salon") {
          model = salons;
        }

        let condition = { _id: mongoose.Types.ObjectId(req.body._id) };
        let updateCondition = { isActive: false };
        let changeStatus = await commonQuery.updateOneDocument(
          model,
          condition,
          updateCondition
        );
        if (!changeStatus) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_UPDATED,
              finalServiceArr
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  deactiveUsers().then(function() {});
}

function viewDetails(req, res) {
  async function viewDetails() {
    try {
    } catch (error) {}
  }

  viewDetails().then(function() {});
}

function createSubscription(req, res) {
  console.log(req.body);
  async function createSubscription() {
    try {
      if (req.body && req.body.amount) {
        stripe.plans.create(
          {
            amount: req.body.amount * 100,
            currency: "usd",
            interval: req.body.interval,
            product: { name: req.body.planname },
            trial_period_days: req.body.trialperiod
          },
          async function(err, plan) {
            if (err) {
              res.json(
                Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
              );
            } else {
              console.log("PLAN", plan);

              let subscriptionSave = new subscriptionplans({
                id: req.body.planname,
                plan_id: plan.id,
                amount: req.body.amount,
                interval: req.body.interval,
                currency: "usd",
                trial_period_days: req.body.trialperiod
              });

              let saveSubscription = await commonQuery.InsertIntoCollection(
                subscriptionplans,
                subscriptionSave
              );
              if (saveSubscription) {
                console.log(saveSubscription);
              }

              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.SUBSCRIPTION_CREATED,
                  plan
                )
              );
            }
          }
        );
      } else {
        return res.json(
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  createSubscription().then(function() {});
}

function deletePlan(req, res) {
  console.log(req.body);
  async function deletePlan() {
    try {
      if (req.body && req.body.planid) {
        stripe.plans.del(req.body.planid, async function(err, confirmation) {
          // asynchronously called
          if (err) {
            console.log(err);
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            console.log("PLAN", confirmation);

            let condition = { _id: req.body._id };
            let updateCondition = { isActive: false };

            let updateSubscription = await commonQuery.updateOneDocument(
              subscriptionplans,
              condition,
              updateCondition
            );
            if (updateSubscription) {
              console.log("HEEELO", updateSubscription);
            }

            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SUBSCRIPTION_CREATED,
                confirmation
              )
            );
          }
        });
      } else {
        return res.json(
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  deletePlan().then(function() {});
}

function getSubscription(req, res) {
  console.log(req.body);
  async function getSubscription() {
    try {
      if (req.body && req.body.type === "plans") {
        console.log("sssssssss");
        let condition = { isActive: true };
        let plansList = await commonQuery.findAll(subscriptionplans, condition);
        console.log(plansList);
        if (!plansList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              plansList
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getSubscription().then(function() {});
}

function getSubscirbedSalonsList(req, res) {
  let count;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getSubscirbedSalonsList() {
    try {
      if (req.body && req.body.type === "subscriptions") {
        count = await commonQuery.findCount(salonSubscriptions);

        let subscriptionList = await commonQuery.getSalonSubscriptionList(
          salonSubscriptions,
          pageSize,
          currentPage
        );
        if (!subscriptionList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let dataToPass = {
            salons: subscriptionList,
            count: count
          };
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              dataToPass
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getSubscirbedSalonsList().then(function() {});
}

function addEmailTemplate(req, res) {
  console.log(req.body);
  async function addEmailTemplate() {
    try {
      if (req.body && req.body.title) {
        let saveEmailTemplate = {
          title: req.body.title,
          unique_keyword: req.body.unique_keyword,
          subject: req.body.subject,
          description:
            '<div class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#97d6c5; -webkit-text-size-adjust:none;"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center" valign="top"> <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell" style=" background: #FFF; padding: 20px 0; border-radius: 5px; margin: 15px 5px;"> <tr> <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="center"> <img src="[[BASEURL]]assets/img/login.png" alt="" style="margin-bottom: 20px;"> </td></tr><tr> <td> &nbsp; </td></tr><tr style="background: #24b68d; width: 100%; height: 40px; font-size: 14px; text-align: center;"> <td> <a href="">Home</a> <a href="">About</a> <a href="">Contact Us</a> <a href="">Login</a> </td></tr></table> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr style="background: #ffffff; width: 100%; height: auto; font-size: 14px; text-align: center;"> <td style="padding: 60px 0 0 0"> <img src="[[BASEURL]]assets/img/email.png" alt="" style="width: 100%; max-width: 50px; margin: 0 0 20px 0;"> <h2 style="color: #57585b; font-weight: 500; font-size: 24px; margin: 20px 0;">Welcome To Dog-Grooming</h2> </td></tr></table> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <img src="[[BASEURL]]assets/img/free_white_blue.jpg" alt="" style="width: 100%;"> </td></tr><tr style="background: #E6FFF8; width: 100%; height: auto; font-size: 14px; text-align: center;"> <td style="text-align: left; padding: 0 30px 0 30px; vertical-align: top;"> <p style="font-size: 18px; font-weight: 500; margin: 0 0 12px 0;line-height: 20px;">Hello [[FirstName]] [[LastName]] ,</p><p style="font-size: 16px; line-height: 20px;">We have sent you this email in response to your request to reset your password on Dog-Grooming. For reset your password , please find below link . </p><p style="font-size: 16px; line-height: 26px;display: inlineblock; background: #05ad7c; padding: 5px 10px; color: #FFF;"><a href="[[NewPasswordLink]]" style="text-decoration: none;">Click here</a></p><p style="font-size: 13px; line-height: 26px;margin-top: 50px;">Thank You</p></td></tr><tr> <td> <img src="[[BASEURL]]assets/img/free_blue_white.jpg" alt="" style="width: 100%;"> </td></tr></table> </td></tr></table> </td></tr></table></div>'
        };

        let saveTemplate = await commonQuery.InsertIntoCollection(
          emailtemplate,
          saveEmailTemplate
        );
        console.log(saveTemplate);
        res.send(saveTemplate);
      }
    } catch (error) {}
  }

  addEmailTemplate().then(function() {});
}

function resetPassword(req, res) {
  async function resetPassword() {
    try {
      if (req.body && req.body.resetkey) {
        let condition = { resetkey: req.body.resetkey };
        let isResetkey = await commonQuery.findData(users, condition);
        console.log("ISRESETKEY", isResetkey);
        if (!isResetkey) {
          return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
          );
        } else {
          let id = isResetkey.data[0]["_id"];
          console.log("ID", id);
          users.findById(id, function(err, result) {
            if (err) {
              res.json(
                Response(constant.ERROR_CODE, constant.FAILED_TO_RESET, null)
              );
            } else {
              result.password = req.body.password;
              result.resetkey = null;
              result.save();

              res.json(
                Response(constant.SUCCESS_CODE, constant.PASSWORD_RESET, result)
              );
            }
          });
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  resetPassword().then(function() {});
}

function updateCategories(req, res) {
  async function updateCategories() {
    try {
      if (req.body && req.body.category_id) {
        let condition = { _id: mongoose.Types.ObjectId(req.body.category_id) };
        let updateCondition = { catname: req.body.catname };
        let updateComplete = await commonQuery.updateOneDocument(
          categories,
          condition,
          updateCondition
        );

        if (!updateComplete) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_UPDATE, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.UPDATE_SUCCESS,
              updateComplete
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  updateCategories().then(function() {});
}

function updateService(req, res) {
  async function updateService() {
    try {
      if (req.body && req.body.service_id) {
        let condition = { _id: mongoose.Types.ObjectId(req.body.service_id) };
        let updateCondition = { name: req.body.name };
        let updateComplete = await commonQuery.updateOneDocument(
          services,
          condition,
          updateCondition
        );

        if (!updateComplete) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_UPDATE, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.UPDATE_SUCCESS,
              updateComplete
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  updateService().then(function() {});
}
