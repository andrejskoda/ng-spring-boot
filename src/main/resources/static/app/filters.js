angular.module('myFilters', [])
	.filter('dateRangeFilter', function() {
		return function(items, from, to) {
    
			if(from == null || to == null){
				return items;
			}
			
	        var result = [];        
	        for (var i=0; i<items.length; i++){
	            if (items[i].dateFrom > from && items[i].dateTo < to)  {
	                result.push(items[i]);
	            }
	        }            
	        return result;
		};
	})
	.filter('tagFilter', function() {
		return function(items, tagObjects) {
    
			if(!(typeof tagObjects != "undefined" && tagObjects != null && tagObjects.length > 0)){
				return items;
			}
			
			var tags = tagObjects.map(function(item){
          		return item['text'];
          	});
			
			var result = [];        
	        for (var i=0; i<items.length; i++){
	        	var item = items[i];
	        	var itemTags = item.tags
	        	for(var j=0; j<itemTags.length; j++){
	        		var itemTag = itemTags[j];
	        		if(tags.indexOf(itemTag) > -1){
	        			result.push(item);
	        		}
	        	}
	        }
	        
	        
        	return result;
	        	

		};
	});