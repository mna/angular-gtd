/*globals angular, _*/
/*jshint asi:true,trailing:true*/

angular.module('gtd.filters', []).
  filter('tags', function() {
    'use strict';

/*    var getUniqueItems = function(arTasks, arProp) {
      var res = []

      if (arTasks && arTasks.length) {
        for (var i = 0; i < arTasks.length; i++) {
          for (var j = 0; j < arTasks[i][arProp].length; j++) {
            res.push(arTasks[i][arProp][j])
          }
        }

        res = _.uniq(res)
      }

      return res.sort()
    }

    return function(arTasks, context) {
      return getUniqueItems(arTasks, context ? 'contexts' : 'folders')
    }*/
  })
