'use strict';


// Declare app level module which depends on filters, and services
angular.module('gtd', ['gtd.filters', 'gtd.services', 'gtd.directives']).
  config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/new', {template: 'partials/partial1.html', controller: MyCtrl1});
    //$routeProvider.when('/', {template: 'partials/partial2.html', controller: MyCtrl2});
    //$routeProvider.otherwise({redirectTo: '/view1'});
  }]);
