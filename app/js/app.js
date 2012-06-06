/*globals angular*/
/*jshint asi:true, trailing:true*/

'use strict';

// Declare app level module which depends on filters, and services
angular.module('gtd', ['gtd.filters', 'gtd.services', 'gtd.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/new', {template: 'partials/new.html', controller: EditCtrl})
      .when('/list', {template: 'partials/list.html', controller: ListCtrl})
      .otherwise({redirectTo: '/new'})
  }])
