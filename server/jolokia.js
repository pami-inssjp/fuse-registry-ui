var unirest = require('unirest');
var logger = require('./logger.js')

 var jolokia = function(url,user,password) {


   var auth = {user:user,pass:password,sendImmediately:true}
   var headers = {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }


   this.buildRequest = function(type,mbean,operation,args){
     logger.info("Parametros = %s",args);
     return  {
         "type": type,
         "mbean": mbean,
         "operation": operation,
         "config":{"mimeType":"application/json"},
         "arguments":args
     }
   }

    this.exec = function(mbean,operation,args,callback){
      var request = this.buildRequest("EXEC",mbean,operation,args);
      unirest
        .post(url)
        .headers(headers)
        .auth(auth)
        .send(request)
        .end(callback);
    }

  };

module.exports = jolokia;
