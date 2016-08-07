(function () {
  'use strict';

  angular
    .module('mean-stack')
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;
    vm.text = 'this is some text from the main controller';
  }
})();
