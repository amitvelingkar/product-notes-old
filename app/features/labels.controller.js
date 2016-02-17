(function() {
  'use strict';

  angular.module('productNotesApp')
    .controller('LabelsController', function(featureName, labels){
      var vmLabels = this;

      vmLabels.labels = labels;
      vmLabels.featureName = featureName;
      vmLabels.newLabel = {
        name: ''
      };

      vmLabels.createLabel = function(){
        vmLabels.labels.$add(vmLabels.newLabel).then(function(){
          vmLabels.newLabel.name = '';
        });
      };
    });
})();
