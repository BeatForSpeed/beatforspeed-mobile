'use strict';

angular
  .module('app', [
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/player.html',
        controller: 'MainCtrl'
<<<<<<< HEAD
      })    
      .when('/playlist', {
        templateUrl: 'views/playlist.html',
        controller: 'MainCtrl'
      })    
=======
      })
>>>>>>> FETCH_HEAD
      .otherwise({
        redirectTo: '/'
      });
  });
