/*jshint asi:true,trailing:true*/
function AppCtrl($scope) {
  'use strict';

  $scope.tasks = [{
    text: 'First task',
    folders: ['#collect', '#nextaction', '#someday', '#garbage'],
    contexts: ['@work'],
    done: false
  }]
}

AppCtrl.$inject = ['$scope']
