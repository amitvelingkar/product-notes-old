(function() {
  'use strict';

  angular.module('productNotesApp')
  	.factory('Teams', function($firebaseArray, FirebaseUrl){
  		var ref = new Firebase(FirebaseUrl + 'teams');
      var teams = $firebaseArray(ref);

      var Teams = {
        getName: function(uid) {
          return teams.$getRecord(tid).name;
        },
        all: function() {
          // HACK - add a fake team

          return users;
        }
      };

      return Users;

  	});
})();
