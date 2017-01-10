angular.module('ngTodo')
.factory('todoService', function($http, authenticationService){

  var getTodos = function(){
    return $http({
      method : 'GET',
      url : '/todos',
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    })
  };

  //
  var createTodo = function(todo) {
    return $http({
      method : 'POST',
      url : '/todos',
      headers : {
        'Content-Type': 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : todo
    })
  };

  var deleteTodo = function(todo) {
    return $http({
      method : 'DELETE',
      url : '/todos/' + todo._id,
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    })
  };

  var updateTodo = function(todo) {
    return $http({
      method : 'PUT',
      url : '/todos/' + todo._id,
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : todo
    })
  };

  return {
    getTodos : getTodos,
    createTodo : createTodo,
    deleteTodo : deleteTodo,
    updateTodo : updateTodo
  };
});
