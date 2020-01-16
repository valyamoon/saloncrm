'use strict';

var jwt = require('jsonwebtoken');

var Constant = require('../config/constant.js');
const commonQuery = require("../lib/commonQuery");
var mongoose = require("mongoose");
const services = require("../api/modules/admin/model/servicesSchema");
const salons = require("../api/modules/salon/model/salonSchema");

// const config = require('../config/config.js').get(process.env.NODE_ENV);
console.log("three-----------")
module.exports = {
    ensureAuthorized: ensureAuthorized,
    getServcieName: getServcieName,
    getCategoryName: getCategoryName,
    getSalonId : getSalonId

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
        jwt.verify(bearerToken, "saloncrm", function(err, decoded) {
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
            code: Constant.AUTH_CODE,
            message: Constant.TOKEN_ERROR
        });
    }
}

function getServcieName(model, masterId) {
    return new Promise(async function(resolve, reject) {
        try {
            let condition = {
                _id: mongoose.Types.ObjectId(masterId)
            };
            let isServiceName = await commonQuery.findoneData(
                model,
                condition,
                'name'
            );
            resolve(isServiceName.name);

        } catch (err) {
            reject(err);
        }
    });

}

function getCategoryName(model, masterId) {

    return new Promise(async function(resolve, reject) {
        try {
            let condition = {
                _id: mongoose.Types.ObjectId(masterId)
            };
            let isCategoryName = await commonQuery.findoneData(
                model,
                condition,
                'catname'
            );
            resolve(isCategoryName.catname);
        } catch (err) {
            reject(err);
        }

    });

}

async function getSalonId(userId){
    return new Promise(async function(resolve, reject) {
        try {
            let condition = {
                user_id: mongoose.Types.ObjectId(userId)
            };
            let salonObj = await commonQuery.findoneData(
                salons,
                condition,
                '_id'
            );
            resolve(salonObj._id);
        } catch (err) {
            reject(err);
        }
    });
}