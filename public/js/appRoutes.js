'use strict';
/* ============================================================================
Module - For Routes
============================================================================ */
angular.module('mongoDbApp.routes', ['ngRoute']).


config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.tpl.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        reloadOnSearch: false
    })
    
    .otherwise({
        redirectTo: '/'
    });
      
    $locationProvider.html5Mode(true);
});