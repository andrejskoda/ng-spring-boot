angular.module('myFilters', []).filter('dateRangeFilter', function() {
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
});