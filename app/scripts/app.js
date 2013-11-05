'use strict';

var ecoApp = angular.module('EcossentialsApp', ['firebase', 'contenteditable']);
  ecoApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/grow', {
        templateUrl: 'views/grow.html',
        controller: 'GrowCtrl'
      })
      .when('/p-video', {
        templateUrl: 'views/p-video.html',
        controller: 'PVideoCtrl'
      })
      .when('/p-perks', {
        templateUrl: 'views/p-perks.html',
        controller: 'PPerksCtrl'
      })
      .when('/p-share', {
        templateUrl: 'views/p-share.html',
        controller: 'PShareCtrl'
      })
      .when('/p-story', {
        templateUrl: 'views/p-story.html',
        controller: 'PStoryCtrl'
      })
      
      .when('/p-stream', {
        templateUrl: 'views/p-stream.html',
        controller: 'PStreamCtrl'
      })
      
      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl'
      })
      .when('/p-funders', {
        templateUrl: 'views/p-funders.html',
        controller: 'MainCtrl'
      })
      .when('/p-team', {
        templateUrl: 'views/p-team.html',
        controller: 'PTeamCtrl'
      })
      .when('/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'ContributeCtrl'
      })
      .when('/p-contribute', {
        templateUrl: 'views/p-contribute.html',
        controller: 'PContributeCtrl'
      })
      .when('/footer', {
        templateUrl: 'views/footer.html',
        controller: 'FooterCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/edit/:projectId', {
        templateUrl: 'views/detail.html',
        controller: 'EditCtrl'
      })
      .when('/new', {
        templateUrl: 'views/detail.html',
        controller: 'CreateCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

ecoApp.filter('noFractionCurrency',
    [ '$filter', '$locale', function(filter, locale) {
      var currencyFilter = filter('currency');
      var formats = locale.NUMBER_FORMATS;
      return function(amount, currencySymbol) {
        var value = currencyFilter(amount, currencySymbol);
        var sep = value.indexOf(formats.DECIMAL_SEP);
        console.log(amount, value);
        if(amount >= 0) { 
          return value.substring(0, sep);
        }
        return value.substring(0, sep) + '';
      };
    } ]);

