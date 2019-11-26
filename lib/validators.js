const Mongoose = require('mongoose');

module.exports = {
    IsValidEmail,
    IsValidMongoId,
    IsValidName,
    IsValidObject,
    ValidateRequiredFieldsInObj,
}

function IsValidEmail(email) {
    return email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
}

function IsValidMongoId(object_id) {
    return Mongoose.Types.ObjectId.isValid(object_id);
}

function IsValidName(name) {
    return name && /^[a-zA-Z \.]*$/i.test(name);
}

function IsValidObject(object) {
    return object && Object.keys(object).length;
}

function ValidateRequiredFieldsInObj(obj, fields) {

    if (!obj || !fields) return 'Required fields are missing!!';

    fields = String(fields).split(',');

    let no_data_fields = [];

    for (let i = 0; i < fields.length; i++) {
        if(typeof obj[fields[i]] === 'boolean' && !(obj[fields[i]] === false || obj[fields[i]] === true)) {
            no_data_fields.push(fields[i]);
        } else if (typeof obj[fields[i]] === 'number' && !(obj[fields[i]] >= 0 || obj[fields[i]] < 0)) {
        // else if (typeof obj[fields[i]] !== 'number' && typeof obj[fields[i]] === 'boolean' && !(obj[fields[i]] === false || obj[fields[i]] === true)) {
            no_data_fields.push(fields[i]);
        } else if (typeof obj[fields[i]] !== 'number' && !obj[fields[i]]) {
            no_data_fields.push(fields[i]);
        }
    }
    return no_data_fields.length ? 'Required fields are missing!! Please pass ' + no_data_fields.join(', ') : false;
}