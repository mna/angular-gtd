/*globals _*/
/*jshint asi:true,trailing:true*/
function EditCtrl($scope) {
  var rxFolders = /(?:^|\s)(#[^\s]+)/g,
    rxCtxs = /(?:^|\s)(@[^\s]+)/g

  var parseTags = function(rx, str, ar) {
    var match

    while (match = rx.exec(str)) {
      if (ar.indexOf(match[1]) < 0) {
        ar.push(match[1])
      }
    }
  }

  $scope.clearItem = function() {
    if (this.new) {
      this.new.task = ''
      this.new.tags = ''
    }
  }

  $scope.addItem = function() {
    var newItem = {
        folders: [],
        contexts: [],
        done: false
      }

    if (this.new && this.new.task) {
      newItem.text = this.new.task

      parseTags(rxFolders, this.new.tags, newItem.folders)
      parseTags(rxCtxs, this.new.tags, newItem.contexts)

      this.tasks.push(newItem)
      this.tasks.isDirty = true
      this.clearItem()
    }
  }
}

EditCtrl.$inject = ['$scope']
