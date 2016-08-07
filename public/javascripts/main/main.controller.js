(function () {
  'use strict';

  angular
    .module('mean-stack')
    .controller('MainController', MainController);

  /* @ngInject */
  function MainController(MainService) {
    var vm = this;
    vm.text = 'this is some text from the main controller';

    vm.createUser = function() {
      var submission = {
        name: vm.name,
        username: vm.username,
        password: vm.password
      };

      MainService.createUser(submission).then(function(data){
        vm.result = data.result.username;
      });
    };
  }
})();
