/**
 * Created by wouyang on 11/21/16.
 */

'use strict';
var config = require('./lib/config');
var endPoint = config.couchbase.endPoint;

var roles = config.roles;
var admins = roles.admin;

// console.log(endPoint);
// console.log(roles);
// console.log(admins);

var global_roles;
var global_admins;

module.exports.initialize = function (config) {
    global_roles = config.roles;
    global_admins = roles.admin;
};

exports.getAdmins = function () {
    return global_admins;
};
