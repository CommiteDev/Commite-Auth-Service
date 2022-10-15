'use strict'
exports.responseMsg = (resStatusCode,resHttpStatusMsg, resMessage, resData = {}) => {
    return {
        status: resStatusCode,
        httpStatus: resHttpStatusMsg,
        message:resMessage,
        data: resData
    };
};
