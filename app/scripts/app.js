'use strict';

var ecoApp = angular.module('EcossentialsApp', ['mongolab']);
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
        templateUrl: 'views/p-video.html',
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
      .otherwise({
        redirectTo: '/'
      });
  });


