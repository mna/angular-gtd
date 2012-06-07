/*globals _, $*/
/*jshint asi:true,trailing:true*/
function MenuCtrl($scope, $location) {
  var foldersCache,
    contextsCache

  $scope.setActive = function($event) {
    if ($scope.currentActive) {
      $scope.currentActive.removeClass("active")
    }

    $scope.currentActive = $($event.srcElement.parentNode).addClass("active")
  }

  var getUniqueItems = function(arTasks, arProp) {
    var res = []

    if (arTasks && arTasks.length) {
      for (var i = 0; i < arTasks.length; i++) {
        for (var j = 0; j < arTasks[i][arProp].length; j++) {
          console.log("adding " + arTasks[i][arProp][j])
          res.push(arTasks[i][arProp][j])
        }
      }

      res = _.uniq(res)
    }

    return res.sort()
  }

  $scope.getUniqueFolders = function() {
    if ($scope.tasks.isDirty || !foldersCache) {
      // Set both folders and contexts to null so that they are re-computed, and remove isDirty
      if ($scope.tasks.isDirty) {
        contextsCache = null
        $scope.tasks.isDirty = false
      }

      foldersCache = getUniqueItems(this.tasks, 'folders')
    }
    return foldersCache
  }

  $scope.getUniqueContexts = function() {
    if ($scope.tasks.isDirty || !contextsCache) {
      // Set both folders and contexts to null so that they are re-computed, and remove isDirty
      if ($scope.tasks.isDirty) {
        foldersCache = null
        $scope.tasks.isDirty = false
      }

      contextsCache = getUniqueItems(this.tasks, 'contexts')
    }
    return contextsCache
  }
}

MenuCtrl.$inject = ['$scope', '$location']
