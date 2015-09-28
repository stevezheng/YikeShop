var AV = require('leanengine');

/**
 * @class
 * 用户类
 * @param {string} objectId
 * @param {string} username 用户名
 * @param {string} password 密码
 */
var User = AV.Object.extend('_User',
  /** @lends User.prototype */
  {}, {
    getMyRole: function (user) {
      var query = new AV.Query(AV.Role);
      query.equalTo('users', user);
      return query.first();
    },
    /**
     * 是否是管理员
     * @param user 用户实例
     * @returns {*|AV.Promise}
     */
    isAdmin: function (user) {
      return this.getMyRole(user)
        .then(function (data) {
          if (!data) {
            return false;
          } else {
            return data.get('name') === 'admin';
          }
        })
    },
    /**
     * 是否是商家
     * @param user 用户实例
     * @returns {*|AV.Promise}
     */
    isSeller: function (user) {
      return this.getMyRole(user)
        .then(function (data) {
          if (!data) {
            return false;
          } else {
            return (data.get('name') === 'seller');
          }
        })
    }
  });

module.exports = User;
