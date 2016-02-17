(function() {
  'use strict';

  angular.module('productNotesApp')
  	.factory('Labels', function($firebaseArray, FirebaseUrl){
  		var ref = new Firebase(FirebaseUrl + 'labels');

  		return {
  			forFeature: function(featureId) {
  				return $firebaseArray(ref.child(featureId));
  			}
  		}
  	});
})();
