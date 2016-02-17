(function() {
  'use strict';

  angular.module('productNotesApp')
  	.factory('Features', function($firebaseArray, FirebaseUrl){
  		var ref = new Firebase(FirebaseUrl + 'features');

      return $firebaseArray(ref);
      /*
      TODO: add teams
  		return {
  			forTeam: function(teamId) {
  				return $firebaseArray(ref.child(teamId));
  			}
  		}
      */
  	});
})();
