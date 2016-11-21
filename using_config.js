/**
 * Created by wouyang on 11/21/16.
 */

var configlib = require('./config');
var config = require('./lib/config');

configlib.initialize(config);
var admin = configlib.getAdmins();
console.log(admin);

var isAdmin = admin.indexOf("user1") !== -1;
var isAdminfalse = admin.indexOf("user4") !== -1;

console.log(isAdmin);
console.log(isAdminfalse);
