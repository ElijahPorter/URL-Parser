var URL = function(url){
	var parsed = {
  	protocol: function(){
    	var result = "HTTP";
    	if (url.search('://') > -1) {
      	result = url.split('/')[0].replace(':', '').toUpperCase();
      }
      return result;
    },
    hostname: function(){
    	var result = "localhost";
      if (url.search('://') > -1) {
    		result = url.split('/')[2].replace(/http.:\/\//g, '').toLowerCase().replace('www.', '');
      } else {
      	result = url.split('/')[0].toLowerCase().replace('www.', '');
      }
      return result;
    },
    port: function(){
    	var result = "";
      if (url.search('://') > -1) {
    		result = url.split(':')[2].split('/')[0];
      } else {
      	result = url.split(':')[1].split('/')[0];
      }
      return result;
    },
    path: function(){
    	var result = "/";
      var parsed = url.split('/');
      if (url.search('://') > -1) {
    		result = "";
        for (i=0;i<parsed.length-3;i++) {
        	result += "/" + parsed[i+3];
        }
      } else {
      	result = "";
        for (i=0;i<parsed.length-1;i++) {
        	result += "/" + parsed[i+1];
        }
      }
      return result;
    }
  };
  
  return parsed;
}
