var request = require("request");


var sc = (function(){
  var soundcloudUrl = "https://soundcloud.com/connect";
  var clientID = "34b370aa58ea274d0480fdd2fe51722a";
  var redirect = "http://localhost:5000/success";
  function showAuthPopup()
  {
    request.get(soundcloudUrl+"?client_id="+clientID+"&redirect_uri="+redirect,function(err,resp){
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log(resp.toJSON());
      }
    });
  }
  
  return {
    showAuthPopup:showAuthPopup
  };
})();

module.exports = sc;