/*globals _*/
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
  }, {
    text: 'Voici un troisième task',
    folders: ['#collect', '#project'],
    contexts: ['@work', '@home'],
    done: false
  }]
}

AppCtrl.$inject = ['$scope']
