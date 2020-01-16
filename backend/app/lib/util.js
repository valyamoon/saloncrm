"use strict";

var jwt = require("jsonwebtoken");
const jwtKey = "saloncrm";

var Constant = require("../config/constant.js");
// const config = require('../config/config.js').get(process.env.NODE_ENV);
console.log("three-----------");
module.exports = {
  ensureAuthorized: ensureAuthorized
};

/* Function is use check authorization of BASEURL.
 * @access private
 * @return json
 * Created by Trisha Deepam
 * @smartData Enterprises (I) Ltd
 * Created Date
 */

function ensureAuthorized(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if (bearerHeader !== "undefined") {
    //console.log("BEARER HEADER", this.bearerHeader);
    var bearer = bearerHeader; //bearerHeader.split(" ");

    //console.log("sss", token);
    //bearerToken = bearer[1];
    // console.log("SSSSS", bearerToken);
    jwt.verify(bearer, jwtKey, function(err, decoded) {
      console.log("decoded ================= ", err, decoded);
      req.user = decoded;
      if (err) {
        return res.send({
          code: Constant.AUTH_CODE,
          message: Constant.INVALID_TOKEN
        });
      }
      next();
    });
  } else {
    return res.send({
      code: Constant.AUTH_CODE,
      message: Constant.TOKEN_ERROR
    });
  }
}
