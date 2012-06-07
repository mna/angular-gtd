/*globals angular, _*/
/*jshint asi:true,trailing:true*/

function tagFilter($location) {
  return function(tasks) {
    var srch = $location.search(),
      s,
      filtered = []

    if (srch && srch.s) {
      s = decodeURIComponent(srch.s)
    } else {
      s = ''
    }

    console.log("Filtering with " + s)
    if ((!s) || (!tasks) || (!angular.isArray(tasks))) {
      filtered = tasks
    } else {
      for (var i = 0; i < tasks.length; i++) {
        if ((tasks[i].folders.indexOf(s) >= 0) ||
          (tasks[i].contexts.indexOf(s) >= 0)) {
          filtered.push(tasks[i])
        }
      }
    }

    return filtered
  }
}
tagFilter.$inject = ['$location']

angular.module('gtd.filters', [])
  .filter('encodeURI', function() {
    'use strict';

    return function(input) {
      return encodeURIComponent(input)
    }
  })
  .filter('tagFilter', tagFilter)
