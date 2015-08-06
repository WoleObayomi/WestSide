var request = require("request");
var sc = (function(){
  var soundcloudUrl = "https://soundcloud.com/connect";
  var clientID = "34b370aa58ea274d0480fdd2fe51722a";
  var redirect = "http://127.0.0.1:5000/success";
  var responseType = "code";

  function getConnectUrl()
  {
    return soundcloudUrl+"?client_id="+clientID+"&redirect_uri="+redirect+"&response_type="+responseType;
  }
  
  function makeRequest(token)
  {
    var url = "https://api.soundcloud.com/me?oauth_token="+token;
    request.get(url,function(err,data){
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log(data);
      }
    });
  }
  
  return {
    getConnectUrl:getConnectUrl,
    makeRequest:makeRequest
  };
})();

module.exports = sc;