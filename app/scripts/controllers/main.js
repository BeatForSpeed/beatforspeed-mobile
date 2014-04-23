'use strict';
// var TripUpdate = $resource('/trips/:tripId/update', {tripId:'@id'});
// angular.module('app', ['ngResource']).provider('Trip', function () {
//   this.$get = ['$resource', function ($resource) {
//     var Trip = $resource('http://127.0.0.1:3000/trips/:tripId/update', {tripId:'@id'});
//     return Trip;
//   }];
//
// });
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

    var geoSuccess = function(position) {
      sendSpeedToServer(position);
    };

    var geoError = function(error) {
      alert('code: '    + error.code    + '\n' +
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
      navigator.geolocation.watchPosition(geoSuccess, geoError, { timeout: 30000 });
    });
  });
