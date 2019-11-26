'use strict';
const Users =require('../../model/users');
const jwt =require('jsonwebtoken');
const passport =require('passport');
const bcrypt = require('bcrypt');
const commonQuery = require('../../../lib/commonQuery'),
    response = require('../../../lib/response'),
    Constant = require('../../../lib/constants'),
    validator = require('../../../lib/validators');
module.exports = {
    userLogin,
    testSwaggerRequest
}
/**
 * Function is use Staff login
 */
function userLogin(req, res) {
    async function asy_login() {
        try {
            let jwtToken = null;
            console.log('email ', req.body.email);
            if ((req.body.email) && (req.body.password)) {
                const password = req.body.password;
                console.log('password ', password)
                if (!validator.IsValidEmail(req.body.email))
                    return response.BadRequest(res);
                // const condition = { email: req.body.email }
                const staff = 'astha@yopmail.com'
                if (!staff)
                    return response.InternalServer(res);
                if (password === '123456')
                    return response.Response(res);                
                else {                    
                    const expirationDuration = 60 * 60 * 8 * 1; // expiration duration 8 Hours                
                    const params = {
                        name: 'Astha',
                        lastname: 'yadav'
                    }
                    jwtToken = jwt.sign(params, Config.SECRET, { expiresIn: expirationDuration});
                    if (validator.isValid(jwtToken)) {
                        return response.Response(res, jwtToken);
                    } else {
                        throw 'Token error.';
                    }
                }
            } else {
                return response.Unauthorized(res);
            }
        } catch (err) {
            console.error('error while login user', err)
            return response.InternalServer(res);
        }
    }
    asy_login().then(dat => {});
}
function testSwaggerRequest(req, res, next) {
    return res.json({
        code: 3000,
        message: 'Dont know'
    })
}