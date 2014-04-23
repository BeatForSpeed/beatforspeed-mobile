'use strict';

angular.module('beatforspeedMobileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('doing something');

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    function onSuccess(position) {
      var element = document.getElementById('geolocation');
      console.log(position);
      element.innerHTML = 'SPEEED: '  + position.coords.speed;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
  });
