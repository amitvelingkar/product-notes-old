(function() {
  'use strict';

  angular.module('productNotesApp')
  	.factory('Channels', function($firebaseArray, FirebaseUrl){
  		var ref = new Firebase(FirebaseUrl + 'channels');
  		var channels = $firebaseArray(ref);

  		return channels;
  	});
})();
