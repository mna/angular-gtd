/*jshint asi:true,trailing:true*/
function AppCtrl($scope) {
  'use strict';

  $scope.tasks = [{
    text: 'Voici un premier task',
    folders: ['#collect'],
    contexts: [],
    done: false
  }, {
    text: 'Voici un deuxième task',
    folders: ['#nextaction', '#project'],
    contexts: ['@work'],
    done: false
  }]
}

AppCtrl.$inject = ['$scope']

function EditCtrl($scope) {
  var parseTags = function(rx, str, ar) {
    var match

    match = rx.exec(str)
    if (match && match.length > 1) {
      for (var i = 1; i < match.length; i++) {
        ar.push(match[i])
      }
    }
  }

  $scope.addItem = function() {
    var newItem = {
        folders: [],
        contexts: [],
        done: false
      },
      rxFolders = /^|\s(#[^\s]+)/,
      rxCtxs = /^|\s(@[^\s]+)/,
      match

    console.log(this.editTask.task)
    newItem.text = this.new.task

    parseTags(rxFolders, this.new.tags, newItem.folders)
    parseTags(rxCtxs, this.new.tags, newItem.contexts)

    this.tasks.push(newItem)
  }
}

EditCtrl.$inject = ['$scope']
