(function(angular) {
  var ItemFactory = function($resource) {
	  
  function parseResponseDates(response) {
	  var data = response.data, key, value;
	  for (key in data) {
	    if (!data.hasOwnProperty(key) && // don't parse prototype or non-string props
	        toString.call(data[key]) !== '[object String]') continue;
	    value = Date.parse(data[key]); // try to parse to date
	    if (value !== NaN) data[key] = value;
	  }
	  return response;
	}
	  
    return $resource('/items/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT",
        interceptor: {response: parseResponseDates}
      },
      remove: {
        method: "DELETE"
      }
    });
  };
  ItemFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("Item", ItemFactory);
  
  var EventFactory = function($resource) {
	    return $resource('/events/:id', {
	      id: '@id'
	    }, {
	      update: {
	        method: "PUT"
	      },
	      remove: {
	        method: "DELETE"
	      }
	    });
	  };
  
  EventFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("Event", EventFactory);
}(angular));