(function() {
  'use strict';

  angular.module('productNotesApp')
    .controller('FeaturesController', function($state, Auth, Users, features){
      var vm = this;

      //vm.profile = profile;
      vm.features = features;

      //vm.getDisplayName = Users.getDisplayName;
      //vm.getGravatar = Users.getGravatar;
      //Users.setOnline(profile.$id);
      //vm.users = Users.all;
      vm.newFeature = {
        name: ''
      };

      vm.createFeature = function(){
        vm.features.$add(vm.newFeature).then(function(ref){
          $state.go('features.labels', {
            featureId: ref.key()
          });
        });
      };
    });

})();
