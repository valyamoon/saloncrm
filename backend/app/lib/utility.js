'use strict';
/*
 * Utility - utility.js
 * Author: smartData Enterprises
 * Date: 28th Nov 2019
 */
// var config = require('../../config/config').get(process.env.NODE_ENV || 'staging');

var utility = {};
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

utility.hashPassword = function (password) {
    if (password) {
        return bcrypt.hashSync(password, salt);
    }
    return '';
}

utility.generateRandomString = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}

module.exports = utility;