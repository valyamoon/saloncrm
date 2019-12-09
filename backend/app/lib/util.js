'use strict';

var jwt = require('jsonwebtoken');

var Constant = require('../config/constant.js');
// const config = require('../config/config.js').get(process.env.NODE_ENV);
console.log("three-----------")
module.exports = {
    ensureAuthorized: ensureAuthorized
}

/* Function is use check authorization of BASEURL.
 * @access private
 * @return json
 * Created by Trisha Deepam
 * @smartData Enterprises (I) Ltd
 * Created Date 
 */

function ensureAuthorized(req, res, next) {
    console.log("baseUrl", req.path)
    var bearerToken;
    var bearerHeader = req.headers["authorization"] || req.query["api_key"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        jwt.verify(bearerToken, "saloncrm", function (err, decoded) {
            console.log("decoded ================= ", err, decoded)
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
            code:  Constant.AUTH_CODE,
            message:Constant.TOKEN_ERROR
        });
    }
}