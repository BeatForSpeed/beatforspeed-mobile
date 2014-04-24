'use strict';

angular.module('app')
  .provider('Trip', function () {
    this.$get = ['$resource', function ($resource) {
      var Trip = $resource('http://127.0.0.1:3000/trips/:tripId/:action', {tripId:'@tripToken'}, {
        updateSpeed: {
          method:'POST',
          params: {action: 'update'}
        }
      });
      return Trip;
    }];
  })
  .controller('MainCtrl', function ($scope, Trip) {
    window.Trip = Trip;
    $scope.tripToken = null;
    $scope.songPlaying = null;
    $scope.spotifyLogin = function () {
      spotify.login(function() {
        alert('success');
      }, function() {
        alert('error')
      });

    };

    var geoError = function(error) {
      console.error('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
    };

    var getTripId = function (callback) {
      $scope.trip = new Trip();
      $scope.trip.$save().then(function (response) {
        callback();
      });
    };

    var sendSpeedToServer = function (position) {
      var trip = $scope.trip;
      trip.lat = position.coords.latitude;
      trip.long = position.coords.longitude;
      trip.speed = position.coords.speed || (Math.random() * 10);
      $scope.$apply();
      trip.$updateSpeed();
    };

    getTripId(function() {
      navigator.geolocation.watchPosition(sendSpeedToServer, geoError, { timeout: 30000 });
    });
  });
