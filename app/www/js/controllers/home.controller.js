(function () {
  'use strict';

  angular
    .module('home.controller', [])
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope'];

  /* @ngInject */
  function HomeCtrl($scope) {
    $scope.banners = [
      {image: 'http://ac-i8LBVLYg.clouddn.com/0452828c615807ba.jpg'},
      {image: 'http://ac-i8LBVLYg.clouddn.com/98eac1120bcd5534.jpg'},
      {image: 'http://ac-i8LBVLYg.clouddn.com/5fb3482ff886816f.jpg'},
      {image: 'http://ac-i8LBVLYg.clouddn.com/60fd14fa7a1bdf5f.jpg'},
      {image: 'http://ac-i8LBVLYg.clouddn.com/86b15c91915cb6ff.jpg'}
    ];
    $scope.fakeSearchAd = '充话费 百万话费限时抢';

    init();

    ////////////////

    function init() {
    }
  }
})();
