(function() {
  'use strict';

  angular.module('angularfireSlackApp')
    .controller('MessagesController', function(profile, channelName, messages){
      var vmMessages = this;

      vmMessages.messages = messages;
      vmMessages.channelName = channelName;
      vmMessages.message = '';

      vmMessages.sendMessage = function() {
        if(vmMessages.message.length > 0) {
          vmMessages.messages.$add({
            uid: profile.$id,
            body: vmMessages.message,
            timestamp: Firebase.ServerValue.TIMESTAMP
          }).then(function() {
            vmMessages.message = '';
          });
        }

      };
    });
})();
