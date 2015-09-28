var AV = require('leanengine');
var User = require('../models/User');

/**
 * @namespace
 */
var _User = {};

/**
 * 编辑用户信息
 * @param req
 * @param res
 * @memberOf _User
 */
_User.edit = function(req, res) {

};


AV.Cloud.define('user.edit', _User.edit);

module.exports = AV.Cloud;
