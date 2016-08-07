(function () {
  'use strict';

  angular
    .module('mean-stack')
    .factory('MainService', MainService);

  /* @ngInject */
  function MainService($http) {
    return {
      createUser: function(submission) {
        return $http.post('/create-user', submission).then(function(result) {
          return result.data;
        });
      }
    };
  }
})();
