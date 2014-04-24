'use strict';

angular.module('app')
  .controller('AuthCtrl', function ($scope, $location, $navigate) {
    $scope.spotifyLogin = function () {
      console.log(typeof window.spotify, window.spotify);

      loginSpotify();

    };
    window.$navigate = $navigate;

    var loginSpotify = function () {
      authSuccess();
      // spotify.login(authSuccess, authError);
    };

    var authSuccess = function () {
      alert('yay!');
      goToMainView();
    };

    var goToMainView = function () {
      $location.url('/main');
    };

    var authError = function () {
        alert('error');
    };
  });
