(function(angular) {
  var AppController = function($scope, Event) {
    
    Event.query(function(response) {
      $scope.events = response ? response : [];
    });
    
    $scope.addEvent = function(newEvent) {
    	
    	
        new Event({
          title: newEvent.title,
          description: newEvent.description,
          venue: newEvent.venue,
          dateFrom: newEvent.dateFrom,
          dateTo: newEvent.dateTo,
          tags: newEvent.tags.map(function(item) {
        	    	return item['text'];
          		})
        }).$save(function(event) {
          $scope.events.push(event);
        });
        $scope.newEvent.title = "";
        $scope.newEvent.description = "";
        $scope.newEvent.venue = "";
        $scope.newEvent.dateFrom= null;
        $scope.newEvent.dateTo= null;
        $scope.newEvent.tags=null;
      };
    
    $scope.updateItem = function(event) {
    	
        
      };
      
      $scope.setEditable = function(event, value) {
          event.editable=value;
          
          if(value === true){
        	  event.tagObjects = event.tags.map(function(tag){
        		 return {text: tag}; 
        	  });
          }else{
        	  event.tags = event.tagObjects.map(function(item){
          		return item['text'];
          		});
          	
              event.$update(); 
          }
        };
        
        $scope.saveEvent = function(event) {
            event.editable=undefined;
          };
    
    $scope.deleteEvent = function(event) {
        event.$remove(function() {
          $scope.events.splice($scope.events.indexOf(event), 1);
        });
      };
  };
  
  AppController.$inject = ['$scope', 'Event'];
  angular.module("myApp.controllers").controller("AppController", AppController);
}(angular));