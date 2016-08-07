(function () {
  'use strict';

  angular
    .module('mean-stack')
    .factory('MainService', MainService);

  /* @ngInject */
  function MainService($http) {

    function createUser(submission) {
      return $http.post('/create-user', submission).then(function(result) {
        return result.data;
      });
    }

    function readUser() {
      // return result.data
    }

    function updateUser() {
      // return result.data;
    }

    function deleteUser() {
      // return result.data
    }

    return {
      createUser: createUser,
      readUser: readUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    };
  }
})();
