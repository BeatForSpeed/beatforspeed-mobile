'use strict';

angular.module('beatforspeedMobileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.speed = null;

    this.geoSuccess = function(position) {
      var speed = position.coords.speed || (Math.random() * 10);
      $scope.speed = speed;
      $scope.$apply();
    };

    this.geoError = function(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    };

    navigator.geolocation.watchPosition(this.geoSuccess, this.geoError, { timeout: 30000 });
  });
