'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope) {
    $scope.speed = null;

    var geoSuccess = function(position) {
      var speed = position.coords.speed || (Math.random() * 10);
      $scope.speed = speed;
      $scope.$apply();
    };

    var geoError = function(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    };

    navigator.geolocation.watchPosition(geoSuccess, geoError, { timeout: 30000 });
  });
