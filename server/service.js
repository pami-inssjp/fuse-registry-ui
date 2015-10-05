var logger = require('./logger.js')

var service = function(client){

  var self = this;



  this.getContainers = function(callback){

    client.exec("io.fabric8:type=Fabric","containers()",[],function (response){
      var res = [];
      var containers = response.body.value;
      containers.forEach(function(elem){
        res.push({"container":elem.id,"status":elem.aliveAndOK?1:0,"provisionStatus":elem.provisionStatus});
      });
      callback(res);
    });

  }

  this.getContainer = function(id,callback){
    client.exec("io.fabric8:type=Fabric","getContainer(java.lang.String)",[id],function(response){
      var container = response.body.value;
      callback(container);
    });
  }

  this.getContainerStatus = function(id){

  }

  this.getContainerAliveAndOK = function(id,callback){
    this.getContainer(id,function(container){
      callback(container.aliveAndOK ? 1 : 0);
    });
  }

  this.getContainerProvisionStatus = function(id,callback){
    this.getContainer(id,function(container){
      callback(container.provisionStatus);
    });
  }


};



module.exports = service;
