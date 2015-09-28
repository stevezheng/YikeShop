var AV = require('leanengine');

AV.Cloud.define('hello', function(req, res) {
  return res.success('hello');
});

module.exports = AV.Cloud;
