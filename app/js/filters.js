/*globals angular, _*/
/*jshint asi:true,trailing:true*/

angular.module('gtd.filters', []).
  filter('encodeURI', function() {
    'use strict';

    return function(input) {
      return encodeURIComponent(input)
    }
  })
