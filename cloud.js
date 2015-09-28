var AV = require('leanengine');
require('./clouds/user');

AV.Cloud.define('hello', function(req, res) {
  return res.success('hello');
});

module.exports = AV.Cloud;
