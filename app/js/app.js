/*globals angular*/
/*jshint asi:true, trailing:true*/

'use strict';

// Declare app level module which depends on filters, and services
angular.module('gtd', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/list', {template: 'partials/list.html', controller: ListCtrl})
      .otherwise({redirectTo: '/list'})
  }])
