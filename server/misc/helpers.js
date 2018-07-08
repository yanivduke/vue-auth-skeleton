'use strict'
require('dotenv').load();

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports.randomValueHex = async function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

module.exports.replayError = function replayError(res, message) {
    res.status(401).json({
        status: "error",
        error_type: "autherror",        
        message: message
    }); //401 Unauthorized
}
//sign the token and replay with user data
module.exports.signAndReplay = function signAndReplay (res, user_data , payload) {
    user_data.token = jwt.sign(payload, process.env.SECRET_OR_KEY , {
        expiresIn: "8 hours"
    });
    res.json({
        status: "ok",
        data: user_data
    });
}

module.exports.GetHashBySalt = async function GetHashBySalt(pss, slt, format){
    let hash = await crypto.createHmac(format, slt); /** Hashing algorithm sha256 */
    await hash.update(pss);
    let value = await hash.digest('hex');
    return value
}

module.exports.cryptoRandomBytes = function cryptoRandomBytes (length) {
    return crypto.randomBytes(length).toString('base64');
}
