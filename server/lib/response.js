const Constant = require('./constants');

module.exports = {
    BadRequest,
    InternalServer,
    Unauthorized,
    Response
}

function BadRequest(res, message = Constant.messages.badRequest) {
    return res.json({
        status: Constant.httpStatus.badRequest,
        message
    })
}

function InternalServer(res, message = Constant.messages.genericErrMsg) {
    return res.json({
        status: Constant.httpStatus.internalServerErr,
        message
    })
}

function Unauthorized(res, message = Constant.messages.unauthorized) {
    return res.json({
        status: Constant.httpStatus.unauthorized,
        message
    })
}

function Response(res, data = {}, message = 'Success', status = Constant.httpStatus.success ) {
    return res.json({
        status,
        message,
        data
    })
}