(function() {
  'use strict';

  angular.module('productNotesApp')
    .controller('ProfileController', function($state, md5, auth, profile){
      var vm = this;

      vm.profile = profile;

      vm.updateProfile = function(){
        vm.profile.email = auth.password.email;
        vm.profile.emailHash = md5.createHash(auth.password.email);
        vm.profile.$save().then(function(){
          $state.go('channels');
        });
      };
    });

})();
