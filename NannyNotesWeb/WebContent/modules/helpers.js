angular
  .module('NannyNotesApp')
  .factory('alert', function($uibModal) {

    function show(action, event) {
      return $uibModal.open({
        templateUrl: 'templates/modalContent.html',
        controller: function() {
          var vm = this;
          vm.action = action;
          vm.event = event;
        },
        controllerAs: 'vm'
      });
    }

    function editEvent(updateCallback, deleteCallback, event){
      return $uibModal.open({
        templateUrl: 'templates/modalEditEvent.html',
        controllerAs: 'vm',
        controller: function(){
          var vm = this;
          vm.update = updateCallback;
          vm.delete = deleteCallback;
          vm.event = angular.copy(event);
        }
      })
    }

    return {
      show: show,
      editEvent: editEvent
    };

  });
