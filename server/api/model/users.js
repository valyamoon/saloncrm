'use strict';

module.exports = (mongoose , type) => {
    return mongoose.define('Staffs', {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    })
}
